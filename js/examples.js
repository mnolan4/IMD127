// Examples Page Functionality
// Handles display and filtering of code examples

function loadExamplesPage() {
    const pageContent = document.getElementById('page-content');
    if (!pageContent) return;

    // Get all examples from all weeks
    const allExamples = [];
    if (typeof courseData !== 'undefined' && courseData.weeks) {
        courseData.weeks.forEach(week => {
            if (week.tasks && week.tasks.examples) {
                week.tasks.examples.forEach((example, index) => {
                    allExamples.push({
                        ...example,
                        weekId: week.id,
                        weekNumber: week.number,
                        weekTitle: week.title,
                        index: index
                    });
                });
            }
        });
    }

    // Determine categories for each example
    const categorizeExample = (example) => {
        const title = example.title.toLowerCase();
        const desc = (example.description || '').toLowerCase();
        const categories = [];

        if (title.includes('shape') || desc.includes('shape')) categories.push('shapes');
        if (title.includes('color') || desc.includes('color')) categories.push('colors');
        if (title.includes('animation') || desc.includes('animation') || desc.includes('animate')) categories.push('animation');
        if (title.includes('mouse') || title.includes('keyboard') || title.includes('interaction') || desc.includes('interaction') || desc.includes('mouse') || desc.includes('keyboard')) categories.push('interaction');
        if (title.includes('loop') || title.includes('pattern') || desc.includes('loop') || desc.includes('pattern') || desc.includes('grid')) categories.push('patterns');
        if (title.includes('array') || title.includes('particle') || desc.includes('array') || desc.includes('particle')) categories.push('particles');
        if (title.includes('function') || desc.includes('function')) categories.push('functions');
        if (title.includes('object') || title.includes('class') || desc.includes('object') || desc.includes('class')) categories.push('objects');
        if (title.includes('random') || title.includes('noise') || desc.includes('random') || desc.includes('noise')) categories.push('randomness');
        if (title.includes('sound') || desc.includes('sound')) categories.push('sound');
        if (title.includes('data') || title.includes('json') || desc.includes('data') || desc.includes('json')) categories.push('data-viz');

        // Default category if none found
        if (categories.length === 0) categories.push('basics');
        return categories;
    };

    // Build HTML
    let html = `
        <header class="page-header">
            <h1>Code Examples Gallery</h1>
            <p class="lead">Browse code examples from throughout the course. Click any example to view the raw code file in a new tab.</p>
        </header>

        <div class="examples-section">
            <div class="gallery-filters" role="group" aria-label="Filter examples">
                <button class="filter-btn active" data-filter="all" aria-pressed="true">All</button>
                <button class="filter-btn" data-filter="shapes" aria-pressed="false">Shapes</button>
                <button class="filter-btn" data-filter="colors" aria-pressed="false">Colors</button>
                <button class="filter-btn" data-filter="animation" aria-pressed="false">Animation</button>
                <button class="filter-btn" data-filter="interaction" aria-pressed="false">Interaction</button>
                <button class="filter-btn" data-filter="patterns" aria-pressed="false">Patterns</button>
                <button class="filter-btn" data-filter="particles" aria-pressed="false">Particles</button>
                <button class="filter-btn" data-filter="functions" aria-pressed="false">Functions</button>
                <button class="filter-btn" data-filter="objects" aria-pressed="false">Objects</button>
                <button class="filter-btn" data-filter="randomness" aria-pressed="false">Randomness</button>
                <button class="filter-btn" data-filter="sound" aria-pressed="false">Sound</button>
                <button class="filter-btn" data-filter="data-viz" aria-pressed="false">Data Viz</button>
            </div>

            <div class="gallery-grid" id="examples-grid" role="list">
    `;

    // Add each example as a button
    allExamples.forEach((example, idx) => {
        const categories = categorizeExample(example);
        const categoryStr = categories.join(' ');
        const description = example.description || 'Review and understand this code example.';

        // Ensure file path is valid
        const codeFile = example.file || '';
        
        html += `
            <div class="example-button"
                 data-category="${categoryStr}"
                 data-week="${example.weekNumber}"
                 role="listitem">
                <span class="example-button-title">${example.title}</span>
                <span class="example-button-week">Week ${example.weekNumber}: ${example.weekTitle}</span>
                <span class="example-button-description">${description}</span>
                ${codeFile ? `<a href="${codeFile}" target="_blank" rel="noopener noreferrer" class="example-code-link" aria-label="View ${example.title} code file (opens in new window)">View Code File <span aria-hidden="true">→</span></a>` : ''}
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    pageContent.innerHTML = html;

    // Setup filter functionality
    setupExampleFilters();
}

function setupCodeCopyForExamples() {
    const tryLinks = document.querySelectorAll('.try-on-openprocessing');
    tryLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const codeFile = link.getAttribute('data-code-file');
            
            if (codeFile) {
                // Try to fetch the code file
                try {
                    // Resolve path relative to current page location
                    const resolvedPath = new URL(codeFile, window.location.href).href;
                    const response = await fetch(resolvedPath);
                    const code = await response.text();
                    
                    if (typeof CodeCopyManager !== 'undefined') {
                        await CodeCopyManager.copyCodeAndOpenOpenProcessing(code, e);
                    } else {
                        // Fallback: just open OpenProcessing
                        window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
                    }
                } catch (err) {
                    // Fallback: just open OpenProcessing
                    window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
                }
            } else {
                // No code file, just open OpenProcessing
                window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
            }
        });
    });
}

function setupExampleFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filters .filter-btn');
    const exampleButtons = document.querySelectorAll('.example-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            // Filter examples
            const filter = button.getAttribute('data-filter');

            exampleButtons.forEach(exampleBtn => {
                const categories = exampleBtn.getAttribute('data-category').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    exampleBtn.style.display = 'flex';
                    exampleBtn.setAttribute('aria-hidden', 'false');
                } else {
                    exampleBtn.style.display = 'none';
                    exampleBtn.setAttribute('aria-hidden', 'true');
                }
            });

            // Announce filter change
            const liveRegion = document.getElementById('aria-live-region');
            if (liveRegion) {
                const count = document.querySelectorAll('.example-button[aria-hidden="false"]').length;
                liveRegion.textContent = `Showing ${count} examples${filter !== 'all' ? ` in ${filter} category` : ''}`;
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

