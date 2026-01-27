// Search Functionality
// Provides site-wide search across all course content

const SearchEngine = {
    // Build search index from all content
    buildIndex() {
        const index = {
            weeks: [],
            examples: [],
            challenges: [],
            assignments: [],
            assessments: [],
            resources: []
        };

        // Index weeks
        if (typeof getAllWeeks === 'function') {
            const weeks = getAllWeeks();
            weeks.forEach(week => {
                index.weeks.push({
                    id: week.id,
                    number: week.number,
                    title: week.title,
                    topics: week.topics.join(' '),
                    deliverables: week.deliverables.join(' '),
                    description: week.learningOutcomes || '',
                    searchableText: `${week.title} ${week.topics.join(' ')} ${week.deliverables.join(' ')} ${week.learningOutcomes || ''}`.toLowerCase(),
                    url: `week-${String(week.number).padStart(2, '0')}.html`
                });
            });
        }

        // Index examples (from code library)
        if (typeof courseData !== 'undefined' && courseData.weeks) {
            courseData.weeks.forEach(week => {
                if (week.tasks && week.tasks.examples) {
                    week.tasks.examples.forEach(example => {
                        const description = example.description || '';
                        index.examples.push({
                            weekId: week.id,
                            weekNumber: week.number,
                            title: example.title || 'Code Example',
                            description: description,
                            searchableText: `${example.title || ''} ${description} code example`.toLowerCase(),
                            url: example.file || '#',
                            type: 'example'
                        });
                    });
                }
            });
        }

        // Index coding challenges
        if (typeof codingChallenges !== 'undefined' && Array.isArray(codingChallenges)) {
            codingChallenges.forEach(challenge => {
                index.challenges.push({
                    id: challenge.id,
                    title: challenge.title || 'Coding Challenge',
                    difficulty: challenge.difficulty || '',
                    description: challenge.description || '',
                    week: challenge.week || 0,
                    searchableText: `${challenge.title || ''} ${challenge.description || ''} ${challenge.difficulty || ''} challenge coding`.toLowerCase(),
                    url: 'challenges.html#' + challenge.id,
                    type: 'challenge'
                });
            });
        }

        // Index assessments
        if (typeof courseData !== 'undefined' && courseData.weeks) {
            courseData.weeks.forEach(week => {
                if (week.tasks && week.tasks.assessments) {
                    week.tasks.assessments.forEach(assessment => {
                        index.assessments.push({
                            weekId: week.id,
                            weekNumber: week.number,
                            title: assessment.title || 'Assessment',
                            type: assessment.type || '',
                            searchableText: `${assessment.title || ''} ${assessment.type || ''} assessment`.toLowerCase(),
                            url: `week-${String(week.number).padStart(2, '0')}.html`,
                            type: 'assessment'
                        });
                    });
                }
            });
        }

        // Index assignments
        if (typeof courseData !== 'undefined' && courseData.weeks) {
            courseData.weeks.forEach(week => {
                if (week.tasks && week.tasks.assignments) {
                    week.tasks.assignments.forEach(assignment => {
                        index.assignments.push({
                            weekId: week.id,
                            weekNumber: week.number,
                            title: assignment.title || 'Assignment',
                            searchableText: `${assignment.title || ''} assignment creative challenge`.toLowerCase(),
                            url: `week-${String(week.number).padStart(2, '0')}.html`,
                            type: 'assignment'
                        });
                    });
                }
            });
        }

        return index;
    },

    // Search function
    search(query, index) {
        if (!query || query.trim().length < 2) {
            return { weeks: [], examples: [], challenges: [], assessments: [], assignments: [], resources: [] };
        }

        const searchTerms = query.toLowerCase().trim().split(/\s+/);
        const results = {
            weeks: [],
            examples: [],
            challenges: [],
            assessments: [],
            assignments: [],
            resources: []
        };

        // Search weeks
        index.weeks.forEach(week => {
            let score = 0;
            searchTerms.forEach(term => {
                if (week.title.toLowerCase().includes(term)) score += 10;
                if (week.topics.toLowerCase().includes(term)) score += 5;
                if (week.searchableText.includes(term)) score += 1;
            });
            if (score > 0) {
                results.weeks.push({ ...week, score });
            }
        });

        // Search examples
        index.examples.forEach(example => {
            let score = 0;
            searchTerms.forEach(term => {
                if (example.title.toLowerCase().includes(term)) score += 10;
                if (example.description && example.description.toLowerCase().includes(term)) score += 5;
                if (example.searchableText.includes(term)) score += 1;
            });
            if (score > 0) {
                results.examples.push({ ...example, score });
            }
        });

        // Search challenges
        if (index.challenges) {
            index.challenges.forEach(challenge => {
                let score = 0;
                searchTerms.forEach(term => {
                    if (challenge.title.toLowerCase().includes(term)) score += 10;
                    if (challenge.description && challenge.description.toLowerCase().includes(term)) score += 5;
                    if (challenge.difficulty && challenge.difficulty.toLowerCase().includes(term)) score += 3;
                    if (challenge.searchableText.includes(term)) score += 1;
                });
                if (score > 0) {
                    results.challenges.push({ ...challenge, score });
                }
            });
        }

        // Search assessments
        index.assessments.forEach(assessment => {
            let score = 0;
            searchTerms.forEach(term => {
                if (assessment.title.toLowerCase().includes(term)) score += 10;
                if (assessment.type.toLowerCase().includes(term)) score += 5;
                if (assessment.searchableText.includes(term)) score += 1;
            });
            if (score > 0) {
                results.assessments.push({ ...assessment, score });
            }
        });

        // Search assignments
        index.assignments.forEach(assignment => {
            let score = 0;
            searchTerms.forEach(term => {
                if (assignment.title.toLowerCase().includes(term)) score += 10;
                if (assignment.searchableText.includes(term)) score += 1;
            });
            if (score > 0) {
                results.assignments.push({ ...assignment, score });
            }
        });

        // Sort by score (highest first)
        Object.keys(results).forEach(key => {
            results[key].sort((a, b) => b.score - a.score);
        });

        return results;
    },

    // Highlight search terms in text
    highlightText(text, query) {
        if (!query) return text;
        const terms = query.trim().split(/\s+/);
        let highlighted = text;
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlighted = highlighted.replace(regex, '<mark>$1</mark>');
        });
        return highlighted;
    },

    // Display search results
    displayResults(results, query) {
        const resultsContainer = document.getElementById('search-results');
        if (!resultsContainer) return;

        const totalResults = results.weeks.length + results.examples.length + 
                           results.challenges.length + results.assessments.length + 
                           results.assignments.length;

        if (totalResults === 0) {
            resultsContainer.innerHTML = '<div class="search-no-results">No results found</div>';
            resultsContainer.classList.add('show');
            return;
        }

        let html = '<div class="search-results-content">';

        // Weeks
        if (results.weeks.length > 0) {
            html += '<div class="search-section"><h4>Weeks</h4>';
            results.weeks.slice(0, 5).forEach(week => {
                const highlightedTitle = this.highlightText(week.title, query);
                html += `
                    <a href="${week.url}" class="search-result-item">
                        <strong>Week ${week.number}: ${highlightedTitle}</strong>
                        <span class="search-result-desc">${this.highlightText(week.topics.substring(0, 100), query)}...</span>
                    </a>
                `;
            });
            html += '</div>';
        }

        // Examples
        if (results.examples.length > 0) {
            html += '<div class="search-section"><h4>Code Examples</h4>';
            results.examples.slice(0, 5).forEach(example => {
                const highlightedTitle = this.highlightText(example.title, query);
                const description = example.description ? this.highlightText(example.description.substring(0, 120), query) + '...' : `Week ${example.weekNumber} example`;
                html += `
                    <a href="${example.url}" class="search-result-item">
                        <strong>${highlightedTitle}</strong>
                        <span class="search-result-desc">${description}</span>
                    </a>
                `;
            });
            html += '</div>';
        }

        // Challenges
        if (results.challenges && results.challenges.length > 0) {
            html += '<div class="search-section"><h4>Coding Challenges</h4>';
            results.challenges.slice(0, 5).forEach(challenge => {
                const highlightedTitle = this.highlightText(challenge.title, query);
                const description = challenge.description ? this.highlightText(challenge.description.substring(0, 120), query) + '...' : `${challenge.difficulty} challenge`;
                html += `
                    <a href="${challenge.url}" class="search-result-item">
                        <strong>${highlightedTitle}</strong>
                        <span class="search-result-desc">${description}</span>
                    </a>
                `;
            });
            html += '</div>';
        }

        // Assessments
        if (results.assessments.length > 0) {
            html += '<div class="search-section"><h4>Assessments</h4>';
            results.assessments.slice(0, 5).forEach(assessment => {
                const assessmentTitleWithWeek = `Week ${assessment.weekNumber}: ${assessment.title}`;
                const highlightedTitle = this.highlightText(assessmentTitleWithWeek, query);
                html += `
                    <a href="${assessment.url}" class="search-result-item">
                        <strong>${highlightedTitle}</strong>
                        <span class="search-result-desc">${assessment.type} - Complete in your LMS</span>
                    </a>
                `;
            });
            html += '</div>';
        }

        // Assignments
        if (results.assignments.length > 0) {
            html += '<div class="search-section"><h4>Assignments</h4>';
            results.assignments.slice(0, 5).forEach(assignment => {
                const highlightedTitle = this.highlightText(assignment.title, query);
                html += `
                    <a href="${assignment.url}" class="search-result-item">
                        <strong>${highlightedTitle}</strong>
                        <span class="search-result-desc">Week ${assignment.weekNumber} assignment</span>
                    </a>
                `;
            });
            html += '</div>';
        }

        html += '</div>';
        resultsContainer.innerHTML = html;
        resultsContainer.classList.add('show');
    }
};

// Initialize search on page load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        
        if (!searchInput || !searchResults) return;

        let searchIndex = null;
        let searchTimeout = null;

        // Build index when page loads
        searchIndex = SearchEngine.buildIndex();

        // Search input event handler
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();

            clearTimeout(searchTimeout);
            
            if (query.length < 2) {
                searchResults.classList.remove('show');
                return;
            }

            searchTimeout = setTimeout(() => {
                const results = SearchEngine.search(query, searchIndex);
                SearchEngine.displayResults(results, query);
            }, 300);
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('show');
            }
        });

        // Handle escape key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchResults.classList.remove('show');
                searchInput.blur();
            }
        });
    });
}

// Make available globally
if (typeof window !== 'undefined') {
    window.SearchEngine = SearchEngine;
}

