// Challenges Page Functionality
// Handles display of Creative Challenges and Coding Challenges

function loadChallengesPage() {
    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    // Get Creative Challenges from assignments (excluding major projects that are on Projects page)
    const excludedIds = ['creative-challenge-02', 'creative-challenge-03', 'final-portfolio'];
    const excludedTitles = ['Interactive Drawing Tool', 'Interactive System or Game', 'Final Portfolio Project'];
    
    const creativeChallenges = [];
    if (typeof courseData !== 'undefined' && courseData.weeks) {
        courseData.weeks.forEach(week => {
            if (week.tasks && week.tasks.assignments) {
                week.tasks.assignments.forEach(assignment => {
                    if ((assignment.type === 'creative-challenge' || assignment.type === 'final-portfolio') &&
                        !excludedIds.includes(assignment.id) && 
                        !excludedTitles.some(title => assignment.title.includes(title))) {
                        creativeChallenges.push({
                            ...assignment,
                            weekNumber: week.number,
                            weekTitle: week.title
                        });
                    }
                });
            }
        });
    }

    // Get Coding Challenges (from challenges-data.js)
    const codingChallengesList = typeof codingChallenges !== 'undefined' ? codingChallenges : [];

    // Build HTML
    let html = `
        <header class="page-header">
            <h1>Coding Challenges</h1>
            <p class="lead">Test your skills with hands-on coding challenges. Each challenge includes starter code and hints.</p>
        </header>

        <div class="challenges-section">
    `;

    // Creative Challenges Section
    if (creativeChallenges.length > 0) {
        html += `
            <section class="challenge-section">
                <h2 class="section-title">Creative Challenges</h2>
                <p class="section-intro">Major creative projects that integrate multiple concepts and allow for artistic exploration.</p>
                <div class="challenges-list" id="creative-challenges-list">
        `;

        creativeChallenges.forEach((challenge, idx) => {
            html += `
                <article class="challenge-card creative-challenge" data-challenge-id="${challenge.id}">
                    <div class="challenge-header">
                        <span class="challenge-difficulty advanced">Major Project</span>
                        <h3>${challenge.title}</h3>
                    </div>
                    <div class="challenge-content">
                        <p><strong>Week ${challenge.weekNumber}:</strong> ${challenge.weekTitle}</p>
                        <a href="${challenge.file}" target="_blank" rel="noopener noreferrer" class="try-button" aria-label="View ${challenge.title} assignment (opens in new window)">
                            View Assignment <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </article>
            `;
        });

        html += `
                </div>
            </section>
        `;
    }

    // Coding Challenges Section
    if (codingChallengesList.length > 0) {
        html += `
            <section class="challenge-section">
                <h2 class="section-title">Practice Coding Challenges</h2>
                <p class="section-intro">Smaller coding exercises to practice specific concepts. Each includes starter code and hints.</p>
                
                <div class="challenge-filters" role="group" aria-label="Filter challenges">
                    <button class="filter-btn active" data-filter="all" aria-pressed="true">All</button>
                    <button class="filter-btn" data-filter="beginner" aria-pressed="false">Beginner</button>
                    <button class="filter-btn" data-filter="intermediate" aria-pressed="false">Intermediate</button>
                    <button class="filter-btn" data-filter="advanced" aria-pressed="false">Advanced</button>
                </div>

                <div class="challenges-list" id="coding-challenges-list">
        `;

        codingChallengesList.forEach((challenge, idx) => {
            html += `
                <article class="challenge-card" data-challenge-id="${challenge.id}" data-difficulty="${challenge.difficulty}">
                    <div class="challenge-header">
                        <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                            <span class="challenge-difficulty ${challenge.difficulty}">${challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}</span>
                            <h3 style="margin: 0; flex: 1;">Challenge ${idx + 1}: ${challenge.title}</h3>
                        </div>
                        <button class="bookmark-btn" 
                                data-bookmark-type="challenge" 
                                data-bookmark-id="${challenge.id}"
                                data-bookmark-title="${challenge.title}"
                                data-bookmark-url="challenges.html#${challenge.id}"
                                aria-label="Bookmark ${challenge.title}"
                                title="Bookmark this challenge">
                            ☆
                        </button>
                    </div>
                    <div class="challenge-content">
                        <p>${challenge.description}</p>
                        <div class="challenge-requirements">
                            <h4>Requirements:</h4>
                            <ul>
                                ${challenge.requirements.map(req => `<li>${req}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="code-example">
                            <h4>Starter Code:</h4>
                            <pre><code>${escapeHtml(challenge.starterCode)}</code></pre>
                        </div>
                        <div class="hint-content">
                            <h4>Hint:</h4>
                            <p>${challenge.hint}</p>
                        </div>
                        <a href="https://openprocessing.org/sketch/create" target="_blank" rel="noopener noreferrer" class="try-button try-on-openprocessing" data-code="${escapeHtml(challenge.starterCode)}" aria-label="Try Challenge ${idx + 1} on OpenProcessing (opens in new window)">
                            Try on OpenProcessing <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </article>
            `;
        });

        html += `
                </div>
            </section>
        `;
    }

    html += `
        </div>
    `;

    pageContent.innerHTML = html;

    // Setup filter functionality
    setupChallengeFilters();

    // Setup code copy functionality
    setupCodeCopyForChallenges();

    // Setup bookmarks
    if (typeof BookmarkManager !== 'undefined') {
        BookmarkManager.updateBookmarkButtons();
        
        // Add click handlers for bookmark buttons
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const type = btn.getAttribute('data-bookmark-type');
                const id = btn.getAttribute('data-bookmark-id');
                const title = btn.getAttribute('data-bookmark-title');
                const url = btn.getAttribute('data-bookmark-url');
                
                if (BookmarkManager.isBookmarked(type, id)) {
                    BookmarkManager.removeBookmark(`${type}-${id}`);
                    BookmarkManager.showToast('Bookmark removed');
                } else {
                    BookmarkManager.addBookmark(type, id, title, url);
                    BookmarkManager.showToast('Bookmark added');
                }
            });
        });
    }
}

function setupCodeCopyForChallenges() {
    const tryLinks = document.querySelectorAll('.try-on-openprocessing');
    tryLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const code = link.getAttribute('data-code');
            
            if (code) {
                // Decode HTML entities
                const decodedCode = decodeHtmlEntities(code);
                
                if (typeof CodeCopyManager !== 'undefined') {
                    await CodeCopyManager.copyCodeAndOpenOpenProcessing(decodedCode, e);
                } else {
                    // Fallback: just open OpenProcessing
                    window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
                }
            } else {
                // No code, just open OpenProcessing
                window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
            }
        });
    });
}

function decodeHtmlEntities(text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
}

function setupChallengeFilters() {
    const filterButtons = document.querySelectorAll('.challenge-filters .filter-btn');
    const challengeCards = document.querySelectorAll('.challenge-card[data-difficulty]');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            // Filter challenges
            const filter = button.getAttribute('data-filter');
            
            challengeCards.forEach(card => {
                const difficulty = card.getAttribute('data-difficulty');
                if (filter === 'all' || difficulty === filter) {
                    card.style.display = 'block';
                    card.setAttribute('aria-hidden', 'false');
                } else {
                    card.style.display = 'none';
                    card.setAttribute('aria-hidden', 'true');
                }
            });

            // Announce filter change
            const liveRegion = document.getElementById('aria-live-region');
            if (liveRegion) {
                const count = document.querySelectorAll('.challenge-card[data-difficulty][aria-hidden="false"]').length;
                liveRegion.textContent = `Showing ${count} challenges${filter !== 'all' ? ` at ${filter} level` : ''}`;
            }
        });

        // Keyboard support
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
}


function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

