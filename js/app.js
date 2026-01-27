// Main Application Logic
// Handles navigation, content loading, and UI interactions

// Helper function to escape HTML
function escapeHtml(text) {
    if (!text) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Helper function to format dates
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Helper function to format date and time
function formatDateTime(dateTimeString) {
    if (!dateTimeString) return '';
    const date = new Date(dateTimeString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

// Helper function to get assessment number for a specific assessment (sequential across all weeks)
function getAssessmentNumber(weekNumber, assessmentId) {
    const weeks = getAllWeeks();
    let count = 0;
    
    for (let i = 0; i < weeks.length; i++) {
        const week = weeks[i];
        if (week.number < weekNumber) {
            // Count all assessments in previous weeks
            count += week.tasks.assessments.length;
        } else if (week.number === weekNumber) {
            // Count assessments up to the current one in this week
            const assessmentIndex = week.tasks.assessments.findIndex(a => a.id === assessmentId);
            if (assessmentIndex >= 0) {
                count += assessmentIndex + 1;
                break;
            }
        }
    }
    
    return count;
}

// Helper function to create collapsible resource section HTML
function createCollapsibleResourceSection(resourceId, title, content, isHorizontal = false) {
    if (!content || !content.trim()) {
        // If no content, return a placeholder
        return `
            <div class="task-item">
                <div class="task-content">
                    <div class="task-title">${title}</div>
                    <div class="task-description">Content is being integrated. Please check back soon.</div>
                </div>
            </div>
        `;
    }
    
    const containerStyle = isHorizontal ? 'width: 100%;' : '';
    const headerStyle = isHorizontal 
        ? 'margin: 0; display: flex; align-items: center; gap: 0.5rem; width: 100%;'
        : 'margin: 0; display: flex; align-items: center; gap: 0.5rem;';
    const titleStyle = isHorizontal ? 'flex: 1; word-wrap: break-word; min-width: 0;' : '';
    const contentStyle = isHorizontal ? 'width: 100%; max-width: 100%; overflow-wrap: break-word; word-wrap: break-word;' : '';
    
    return `
        <div class="task-item resource-item" style="${containerStyle}">
            <div class="key-concepts-header-wrapper" style="margin-bottom: 0; ${isHorizontal ? 'width: 100%;' : ''}">
                <h4 style="${headerStyle}">
                    <span style="${titleStyle}">${title}</span>
                    <button class="key-concepts-toggle" 
                            id="resource-toggle-${resourceId}"
                            onclick="toggleResource('${resourceId}')"
                            onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleResource('${resourceId}');}"
                            aria-expanded="false"
                            aria-controls="resource-content-${resourceId}"
                            aria-label="Expand or collapse ${title} content"
                            style="margin-left: auto; padding: 0.25rem 0.5rem; font-size: 0.9rem; flex-shrink: 0;">
                        <span class="toggle-icon">▼</span>
                        <span class="toggle-text">Show</span>
                    </button>
                </h4>
            </div>
            <div class="key-concepts-content-wrapper" 
                 id="resource-content-${resourceId}" 
                 aria-hidden="true" 
                 style="display: none; margin-top: 1rem; ${isHorizontal ? 'width: 100%;' : ''}">
                <div class="key-concepts-html-content" style="line-height: 1.8; color: var(--text-dark); white-space: pre-wrap; ${contentStyle}">
                    ${content}
                </div>
            </div>
        </div>
    `;
}

// Toggle resource section (similar to toggleKeyConcepts)
function toggleResource(resourceId) {
    const contentWrapper = document.getElementById(`resource-content-${resourceId}`);
    const toggleButton = document.getElementById(`resource-toggle-${resourceId}`);
    if (!contentWrapper || !toggleButton) return;
    
    const toggleIcon = toggleButton.querySelector('.toggle-icon');
    const toggleText = toggleButton.querySelector('.toggle-text');
    if (!toggleIcon || !toggleText) return;
    
    // Check current state - check button's aria-expanded and also check computed display style
    const ariaExpanded = toggleButton.getAttribute('aria-expanded');
    const computedDisplay = window.getComputedStyle(contentWrapper).display;
    const isExpanded = ariaExpanded === 'true' || computedDisplay === 'block';
    
    if (isExpanded) {
        // Collapse
        contentWrapper.style.display = 'none';
        contentWrapper.setAttribute('aria-hidden', 'true');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleIcon.textContent = '▼';
        toggleText.textContent = 'Show';
    } else {
        // Expand
        contentWrapper.style.display = 'block';
        contentWrapper.setAttribute('aria-hidden', 'false');
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleIcon.textContent = '▲';
        toggleText.textContent = 'Hide';
    }
}

// Make toggleResource available globally
window.toggleResource = toggleResource;

// Load Getting Started section on homepage
function loadGettingStartedSection() {
    const container = document.getElementById('getting-started-content');
    if (!container) return;
    
    const week1 = getWeekByNumber(1);
    if (!week1 || !week1.tasks.resources) return;
    
    let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';
    
    week1.tasks.resources.forEach((resource, index) => {
        const resourceId = `homepage-resource-${index}`;
        const hasContent = resource.content && resource.content.trim().length > 0;
        
        if (hasContent) {
            html += `
                <div style="background-color: var(--bg-white); border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); width: 100%;">
                    ${createCollapsibleResourceSection(resourceId, resource.title, resource.content, true)}
                </div>
            `;
        } else {
            html += `
                <div style="background-color: var(--bg-white); border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); width: 100%;">
                    <h3 style="margin-top: 0;">${resource.title}</h3>
                    <p style="color: var(--text-medium);">Content is being integrated. Please check back soon.</p>
                </div>
            `;
        }
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    // Load Getting Started section if on homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        setTimeout(loadGettingStartedSection, 100);
    }
});

function initializeApp() {
    // Build navigation menu
    buildNavigation();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize progress system
    if (typeof ProgressManager !== 'undefined') {
        ProgressManager.init();
        ProgressManager.updateUI();
    }
    
    // Load current page content
    loadPageContent();
}

// Build navigation menu with weeks
function buildNavigation() {
    const weeksMenu = document.getElementById('weeks-menu');
    if (!weeksMenu) {
        return;
    }

    try {
        const weeks = getAllWeeks();
        if (!weeks || weeks.length === 0) {
            return;
        }
        
        weeks.forEach(week => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `week-${String(week.number).padStart(2, '0')}.html`;
            link.className = 'nav-link';
            link.textContent = `Week ${week.number}: ${week.title}`;
            li.appendChild(link);
            weeksMenu.appendChild(li);
        });
    } catch (error) {
        // Silently handle navigation errors
    }
}

// Set up event listeners
function setupEventListeners() {
    // Clear data button (now on privacy page)
    const clearBtn = document.getElementById('clear-data-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            ProgressManager.clearAllData();
            // Show confirmation message
            const message = document.createElement('div');
            message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: var(--success-color); color: white; padding: 1rem 2rem; border-radius: 6px; z-index: 10000; box-shadow: 0 4px 12px rgba(0,0,0,0.2);';
            message.textContent = 'All data cleared successfully!';
            document.body.appendChild(message);
            setTimeout(() => {
                message.remove();
            }, 3000);
        });
    }

    // Mobile menu toggle (if needed)
    setupMobileMenu();

    // Listen for progress updates
    window.addEventListener('progressUpdated', (e) => {
        updateProgressDisplays();
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    // Add hamburger menu for mobile if needed
    if (window.innerWidth <= 768) {
        // Mobile menu implementation can be added here
    }
}

// Load content for current page
function loadPageContent() {
    // Try multiple methods to get filename
    let filename = window.location.pathname.split('/').pop();
    
    // If no filename, try from href
    if (!filename || filename === '') {
        const hrefMatch = window.location.href.match(/\/([^\/]+\.html)/);
        if (hrefMatch) {
            filename = hrefMatch[1];
        }
    }
    
    // Handle empty or index
    if (filename === 'index.html' || filename === '' || filename === 'Website/' || !filename) {
        // Homepage - already loaded
        return;
    } else if (filename.startsWith('week-')) {
        const weekMatch = filename.match(/week-(\d+)\.html/);
        if (weekMatch) {
            loadWeekPage(parseInt(weekMatch[1]));
        }
    } else if (filename === 'examples.html' || window.location.href.includes('examples.html')) {
        if (typeof loadExamplesPage === 'function') {
            loadExamplesPage();
        }
    } else if (filename === 'challenges.html' || window.location.href.includes('challenges.html')) {
        if (typeof loadChallengesPage === 'function') {
            loadChallengesPage();
        }
    } else if (filename === 'progress.html' || window.location.href.includes('progress.html')) {
        loadProgressPage();
    } else if (filename === 'certificates.html' || window.location.href.includes('certificates.html')) {
        loadCertificatesPage();
    } else if (filename === 'assessments.html' || window.location.href.includes('assessments.html')) {
        loadAssessmentsPage();
    } else if (filename === 'assignments.html' || window.location.href.includes('assignments.html')) {
        loadAssignmentsPage();
    } else if (filename === 'projects.html' || window.location.href.includes('projects.html')) {
        if (typeof loadProjectsPage === 'function') {
            loadProjectsPage();
        }
    } else if (filename === 'resources.html' || window.location.href.includes('resources.html')) {
        loadResourcesPage();
    }
}

// Load week page content
function loadWeekPage(weekNumber) {
    // weekNumber should be a number (1-15)
    if (typeof weekNumber !== 'number' || weekNumber < 1 || weekNumber > 15) {
        return;
    }

    const week = getWeekByNumber(weekNumber);
    if (!week) {
        return;
    }

    const contentArea = document.getElementById('page-content');
    if (!contentArea) return;

    // Build week page HTML
    let html = `
        <div class="week-header">
            <h1 class="week-title">Week ${week.number}: ${week.title}</h1>
            ${week.schedule ? `
            <div class="week-schedule" style="background-color: var(--bg-white); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 4px solid var(--primary-color); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
                <h3 style="font-size: 1.25rem; color: var(--text-dark); margin-top: 0; margin-bottom: 1rem;">Schedule</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <strong>Week Dates:</strong><br>
                        ${formatDate(week.schedule.weekStart)} - ${formatDate(week.schedule.weekEnd)}
                    </div>
                    ${week.schedule.classDates && week.schedule.classDates.length > 0 ? `
                    <div>
                        <strong>Class Meetings:</strong><br>
                        ${week.schedule.classDates.map(date => formatDate(date)).join(', ')}
                    </div>
                    ` : ''}
                </div>
                ${Object.keys(week.schedule.assignments || {}).length > 0 || Object.keys(week.schedule.assessments || {}).length > 0 ? `
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                    <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-top: 0; margin-bottom: 0.75rem;">Due Dates</h4>
                    ${Object.keys(week.schedule.assignments || {}).length > 0 ? `
                    <div style="margin-bottom: 0.75rem;">
                        <strong>Assignments:</strong><br>
                        ${Object.entries(week.schedule.assignments).map(([id, dueDate]) => {
                            const assignment = week.tasks.assignments.find(a => a.id === id);
                            return assignment ? `<span style="display: inline-block; margin-top: 0.25rem;">${assignment.title}: <strong>${formatDateTime(dueDate)}</strong></span>` : '';
                        }).filter(Boolean).join('<br>')}
                    </div>
                    ` : ''}
                    ${Object.keys(week.schedule.assessments || {}).length > 0 ? `
                    <div>
                        <strong>Assessments:</strong><br>
                        ${Object.entries(week.schedule.assessments).map(([id, dueDate]) => {
                            const assessment = week.tasks.assessments.find(a => a.id === id);
                            return assessment ? `<span style="display: inline-block; margin-top: 0.25rem;">${assessment.title}: <strong>${formatDateTime(dueDate)}</strong></span>` : '';
                        }).filter(Boolean).join('<br>')}
                    </div>
                    ` : ''}
                </div>
                ` : ''}
            </div>
            ` : ''}
            <div class="week-meta">
                <p><strong>Topics:</strong> ${week.topics.join(', ')}</p>
                <p><strong>Deliverables:</strong> ${week.deliverables.join(', ')}</p>
                ${week.learningOutcomes ? `<p><strong>Learning Outcomes:</strong> ${week.learningOutcomes}</p>` : ''}
            </div>
            <div class="week-description">
                <p>Complete all tasks below to earn your Week ${week.number} completion certificate.</p>
            </div>
        </div>
    `;

    // Resources - Moved to be first, before Key Concepts
    if (week.tasks.resources.length > 0) {
        html += `
            <div class="task-section">
                <h3>Resources</h3>
        `;
        week.tasks.resources.forEach((resource, index) => {
            const resourceId = `resource-${week.id}-${index}`;
            const hasContent = resource.content && resource.content.trim().length > 0;
            
            if (hasContent) {
                // Use collapsible section with content
                html += createCollapsibleResourceSection(resourceId, resource.title, resource.content);
                // Add checkbox for completion tracking
                html += `
                    <div style="margin-top: 0.5rem;">
                        <input type="checkbox" class="task-checkbox" 
                               id="resource-checkbox-${week.id}-${index}"
                               ${ProgressManager.isComplete(week.id, 'resource', index) ? 'checked' : ''}
                               onchange="toggleTask('${week.id}', 'resource', ${index})"
                               aria-label="Mark ${resource.title} as complete">
                        <label for="resource-checkbox-${week.id}-${index}" style="margin-left: 0.5rem;">Mark as complete</label>
                    </div>
                `;
            } else {
                // Fallback: show title with note that content is being loaded
                html += `
                    <div class="task-item">
                        <input type="checkbox" class="task-checkbox" 
                               id="resource-${week.id}-${index}"
                               ${ProgressManager.isComplete(week.id, 'resource', index) ? 'checked' : ''}
                               onchange="toggleTask('${week.id}', 'resource', ${index})"
                               aria-label="Mark ${resource.title} as complete">
                        <label for="resource-${week.id}-${index}" class="sr-only">Mark ${resource.title} as complete</label>
                        <div class="task-content">
                            <div class="task-title">${resource.title}</div>
                            <div class="task-description">Content is being integrated. Please check back soon.</div>
                        </div>
                    </div>
                `;
            }
        });
        html += `</div>`;
    }

    // Key Concepts - Collapsible Section
    const keyConceptsComplete = ProgressManager.isComplete(week.id, 'keyConcepts');
    const keyConcepts = week.tasks.keyConcepts;
    html += `
        <div class="task-section key-concepts-section">
            <div class="key-concepts-header-wrapper">
                <h3>
                    <input type="checkbox" class="task-checkbox" id="keyConcepts-${week.id}" 
                       ${keyConceptsComplete ? 'checked' : ''}
                       onchange="toggleTask('${week.id}', 'keyConcepts')"
                       aria-label="Mark Key Concepts for Week ${week.number} as complete">
                    <label for="keyConcepts-${week.id}">Key Concepts</label>
                    ${keyConceptsComplete ? '<span class="progress-badge progress-completed" aria-label="Completed">✓</span>' : ''}
                </h3>
                <div class="key-concepts-actions">
                    <button class="key-concepts-toggle" 
                            id="keyConcepts-toggle-${week.id}"
                            onclick="toggleKeyConcepts('${week.id}')"
                            onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleKeyConcepts('${week.id}');}"
                            aria-expanded="false"
                            aria-controls="keyConcepts-content-${week.id}"
                            aria-label="Expand or collapse key concepts content">
                        <span class="toggle-icon">▼</span>
                        <span class="toggle-text">Show</span>
                    </button>
                </div>
            </div>
            <div class="key-concepts-content-wrapper" id="keyConcepts-content-${week.id}" aria-hidden="true" style="display: none;">
                <div class="key-concepts-loading" id="keyConcepts-loading-${week.id}" style="display: none;">
                    <p>Loading key concepts...</p>
                </div>
                <div class="key-concepts-error" id="keyConcepts-error-${week.id}" style="display: none;">
                    <p>Error loading key concepts. Please try again or use the PDF download link.</p>
                </div>
                <div class="key-concepts-html-content" id="keyConcepts-html-${week.id}"></div>
            </div>
        </div>
    `;

    // Code Examples
    if (week.tasks.examples.length > 0) {
        html += `
            <div class="task-section">
                <h3>Code Examples</h3>
        `;
        week.tasks.examples.forEach((example, index) => {
            const exampleComplete = ProgressManager.isComplete(week.id, 'example', index);
            
            html += `
                <div class="task-item">
                    <input type="checkbox" class="task-checkbox" 
                           id="example-${week.id}-${index}"
                           ${exampleComplete ? 'checked' : ''}
                           onchange="toggleTask('${week.id}', 'example', ${index})"
                           aria-label="Mark ${example.title} as complete">
                    <label for="example-${week.id}-${index}" class="sr-only">Mark ${example.title} as complete</label>
                    <div class="task-content">
                        <div class="task-title">
                            ${example.title}
                            ${exampleComplete ? '<span class="progress-badge progress-completed" aria-label="Completed">✓</span>' : ''}
                        </div>
                        <div class="task-description">${example.description || 'Review and understand this code example. Study the code structure, syntax, and creative application.'}</div>
                        <a href="${example.file}" target="_blank" rel="noopener noreferrer" class="task-link" aria-label="View ${example.title} code example for Week ${week.number} (opens in new window)">View Code File <span aria-hidden="true">→</span></a>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }

    // Assessments
    if (week.tasks.assessments.length > 0) {
        html += `
            <div class="task-section">
                <h3>Assessments</h3>
        `;
        week.tasks.assessments.forEach(assessment => {
            const assessmentNumber = getAssessmentNumber(week.number, assessment.id);
            const assessmentTitleWithWeek = `Assessment #${assessmentNumber}: ${assessment.title}`;
            const dueDate = week.schedule && week.schedule.assessments && week.schedule.assessments[assessment.id] 
                ? formatDateTime(week.schedule.assessments[assessment.id]) 
                : null;
            
            // Special handling for midterm and final exam
            const isMidterm = assessment.id === 'midterm-exam';
            const isFinal = assessment.id === 'final-exam';
            let description = 'Complete this assessment exercise in your LMS. Return here to mark it as complete.';
            let dateTimeLabel = 'Due';
            
            if (isMidterm || isFinal) {
                description = '';
                dateTimeLabel = 'In-class';
            }
            
            html += `
                <div class="task-item">
                    <input type="checkbox" class="task-checkbox" 
                           id="assessment-${week.id}-${assessment.id}"
                           ${ProgressManager.isComplete(week.id, 'assessment', null, assessment.id) ? 'checked' : ''}
                           onchange="toggleTask('${week.id}', 'assessment', null, '${assessment.id}')"
                           aria-label="Mark ${assessmentTitleWithWeek} as complete">
                    <label for="assessment-${week.id}-${assessment.id}" class="sr-only">Mark ${assessmentTitleWithWeek} as complete</label>
                    <div class="task-content">
                        <div class="task-title">${assessmentTitleWithWeek}</div>
                        <div class="task-description">
                            ${description}
                            ${dueDate ? `${description ? '<br>' : ''}<strong>${dateTimeLabel}:</strong> ${dueDate}` : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }

    // Assignments
    if (week.tasks.assignments.length > 0) {
        html += `
            <div class="task-section">
                <h3>Assignments</h3>
        `;
        week.tasks.assignments.forEach(assignment => {
            const hasPrompt = assignment.prompt;
            const dueDate = week.schedule && week.schedule.assignments && week.schedule.assignments[assignment.id] 
                ? formatDateTime(week.schedule.assignments[assignment.id]) 
                : null;
            html += `
                <div class="task-item">
                    <input type="checkbox" class="task-checkbox" 
                           id="assignment-${week.id}-${assignment.id}"
                           ${ProgressManager.isComplete(week.id, 'assignment', null, assignment.id) ? 'checked' : ''}
                           onchange="toggleTask('${week.id}', 'assignment', null, '${assignment.id}')"
                           aria-label="Mark ${assignment.title} as complete">
                    <label for="assignment-${week.id}-${assignment.id}" class="sr-only">Mark ${assignment.title} as complete</label>
                    <div class="task-content">
                        <div class="task-title">${assignment.title}</div>
                        ${hasPrompt ? `<div class="task-description" style="white-space: pre-wrap; margin-top: 0.5rem;">${escapeHtml(assignment.prompt)}</div>` : '<div class="task-description">Complete this creative assignment. Review the guidelines and create your project.</div>'}
                        ${dueDate ? `<div class="task-description" style="margin-top: 0.5rem;"><strong>Due:</strong> ${dueDate}</div>` : ''}
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }

    // Certificate section
    html += `
        <div class="task-section">
            <h3>Certificate</h3>
            <div class="certificate-section">
                <p>Complete all tasks above to earn your Week ${week.number} completion certificate.</p>
                <div id="certificate-status-${week.id}">
                    <p style="color: var(--text-light);">Complete all tasks to unlock your certificate.</p>
                </div>
                <button onclick="generateCertificate('${week.id}', 'week')" class="btn-primary" id="cert-btn-${week.id}" style="display:none;" aria-label="Generate and download certificate for Week ${week.number}">
                    Generate & Download Certificate
                </button>
            </div>
        </div>
    `;

    contentArea.innerHTML = html;

    // Check certificate eligibility after a short delay to ensure DOM is ready
    setTimeout(() => {
        checkCertificateEligibility(week.id);
    }, 100);
}

// Toggle task completion
function toggleTask(weekId, taskType, taskIndex = null, taskId = null) {
    const checkbox = event.target;
    if (checkbox.checked) {
        ProgressManager.markComplete(weekId, taskType, taskIndex, taskId);
    } else {
        ProgressManager.markIncomplete(weekId, taskType, taskIndex, taskId);
    }
    
    // Check if week is now complete (with delay to ensure progress is saved)
    setTimeout(() => {
        checkCertificateEligibility(weekId);
    }, 100);
}

// Check if certificate can be earned
function checkCertificateEligibility(weekId) {
    const isComplete = ProgressManager.isWeekComplete(weekId);
    const statusEl = document.getElementById(`certificate-status-${weekId}`);
    const btnEl = document.getElementById(`cert-btn-${weekId}`);
    
    if (isComplete) {
        if (statusEl) {
            statusEl.innerHTML = '<p style="color: var(--success-color); font-weight: 500;">✓ All tasks complete! You can now download your certificate.</p>';
        }
        if (btnEl) {
            btnEl.style.display = 'inline-block';
        }
    } else {
        if (statusEl && statusEl.innerHTML.indexOf('Complete all tasks') === -1) {
            statusEl.innerHTML = '<p style="color: var(--text-light);">Complete all tasks to unlock your certificate.</p>';
        }
        if (btnEl) {
            btnEl.style.display = 'none';
        }
    }
}

// Update progress displays
function updateProgressDisplays() {
    // This will be called when progress updates
    // Update any progress-related UI elements
}

// Load progress page
function loadProgressPage() {
    const contentArea = document.getElementById('page-content');
    if (!contentArea) return;

    const stats = ProgressManager.getStats();
    const weeks = getAllWeeks();

    let html = `
        <header class="page-header">
            <h1>My Progress</h1>
            <p class="lead">Track your progress through the course</p>
        </header>

        <section class="progress-summary-section">
            <div class="welcome-card">
                <h2>Overall Progress</h2>
                <div class="progress-summary">
                    <div class="stat">
                        <span class="stat-value">${stats.weeksComplete}</span>
                        <span class="stat-label">Weeks Complete</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${stats.tasksComplete}</span>
                        <span class="stat-label">Tasks Complete</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${stats.certificatesEarned}</span>
                        <span class="stat-label">Certificates</span>
                    </div>
                </div>
                <div class="progress-bar" role="progressbar" aria-valuenow="${stats.overallProgress}" aria-valuemin="0" aria-valuemax="100" aria-label="Overall course progress" style="margin-top: 1rem;">
                    <div class="progress-fill" style="width: ${stats.overallProgress}%"></div>
                </div>
                <p style="text-align: center; margin-top: 0.5rem; color: var(--text-light);">
                    ${stats.overallProgress}% Complete
                </p>
            </div>
        </section>

        <section class="weeks-progress">
            <h2>Week-by-Week Progress</h2>
    `;

    weeks.forEach(week => {
        const weekProgress = ProgressManager.getWeekProgress(week.id);
        const isComplete = ProgressManager.isWeekComplete(week.id);
        
        html += `
            <div class="task-section">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3 style="margin: 0;">
                        <a href="week-${String(week.number).padStart(2, '0')}.html" style="text-decoration: none; color: inherit;">
                            Week ${week.number}: ${week.title}
                        </a>
                    </h3>
                    <span style="font-size: 1.25rem; font-weight: bold; color: ${isComplete ? 'var(--success-color)' : 'var(--text-light)'};">
                        ${weekProgress}%
                    </span>
                </div>
                <div class="progress-bar" role="progressbar" aria-valuenow="${weekProgress}" aria-valuemin="0" aria-valuemax="100" aria-label="Week ${week.number} progress">
                    <div class="progress-fill" style="width: ${weekProgress}%"></div>
                </div>
                ${isComplete ? '<p style="color: var(--success-color); margin-top: 0.5rem;">✓ Week Complete</p>' : ''}
            </div>
        `;
    });

    html += `</section>`;

    contentArea.innerHTML = html;
}

// Load certificates page
function loadCertificatesPage() {
    const contentArea = document.getElementById('page-content');
    if (!contentArea) return;

    let html = `
        <header class="page-header">
            <h1>Certificates</h1>
            <p class="lead">Download your completion certificates</p>
        </header>

        <section class="certificates-section">
            <div class="welcome-card">
                <h2>Certificate Information</h2>
                <p>Certificates are generated when you complete all tasks in a week, section, or the entire course. All certificates are stored locally and can be downloaded as PDFs.</p>
                <p><strong>Privacy:</strong> Certificates are generated on your device. No information is sent anywhere.</p>
            </div>
        </section>

        <section class="certificates-list">
            <h2>Available Certificates</h2>
    `;

    const certificates = ProgressManager.getCertificates();
    const weeks = getAllWeeks();

    // Week certificates
    weeks.forEach(week => {
        const isComplete = ProgressManager.isWeekComplete(week.id);
        const cert = certificates[week.id];
        
        html += `
            <div class="task-section">
                <h3>Week ${week.number}: ${week.title}</h3>
                <p>${isComplete ? '✓ Eligible for certificate' : 'Complete all tasks to earn certificate'}</p>
                ${isComplete ? `
                    <button onclick="generateCertificate('${week.id}', 'week')" class="btn-primary">
                        ${cert && cert.earned ? 'Download Certificate' : 'Generate & Download Certificate'}
                    </button>
                ` : '<p style="color: var(--text-light);">Complete all tasks for this week to unlock the certificate.</p>'}
            </div>
        `;
    });

    html += `</section>`;

    contentArea.innerHTML = html;
}

// Load assessments page
function loadAssessmentsPage() {
    const contentArea = document.getElementById('page-content');
    if (!contentArea) return;

    let html = `
        <header class="page-header">
            <h1>Assessments</h1>
            <p class="lead">Practice problems, code tracing, and assessment exercises</p>
        </header>

        <section class="assessments-info-section" style="background-color: var(--bg-white); border-radius: 12px; padding: 2rem; margin-bottom: 2rem; border-left: 4px solid var(--primary-color); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
            <h2 style="font-size: 1.5rem; color: var(--text-dark); margin-top: 0; margin-bottom: 1rem;">About Assessments</h2>
            
            <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 1.5rem;">
                Assessments are designed to help you practice and demonstrate your understanding of creative coding concepts. 
                These exercises will be completed either <strong>online through ELMS/Canvas</strong> or <strong>in person as a proctored assessment</strong>, 
                depending on the specific assessment and course structure.
            </p>

            <h3 style="font-size: 1.25rem; color: var(--text-dark); margin-top: 1.5rem; margin-bottom: 1rem;">Grading Breakdown</h3>
            
            <div style="margin-bottom: 1.5rem; padding: 1rem; background-color: var(--bg-light); border-radius: 8px;">
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    <strong>Formative assessments (25%):</strong> Code tracing, code explanations, Parsons problems, practice problems
                </p>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    <strong>Exams (35%):</strong> Midterm exam (15%), Final exam (20%)
                </p>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    <strong>Summative assessments (40%):</strong> Creative challenges (25%), Code writing tasks (8%), Live coding (5%), Final portfolio (2%)
                </p>
            </div>

            <h3 style="font-size: 1.25rem; color: var(--text-dark); margin-top: 1.5rem; margin-bottom: 1rem;">Midterm and Final Exams</h3>
            
            <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-top: 1rem; margin-bottom: 0.5rem;">Midterm Exam (15% of grade)</h4>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    The midterm exam occurs on <strong>March 2, 2025, in-class</strong>. It covers Weeks 1-5 concepts through custom functions. 
                    The exam is proctored in-class with additional time available via TA proctored sessions. 
                    It includes a balanced mix of familiar assessment types (code tracing, code explanation, Parsons problems, code writing) 
                    to complement the learning structure.
                </p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-top: 1rem; margin-bottom: 0.5rem;">Final Exam (20% of grade)</h4>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    The final exam occurs on <strong>Monday, May 11, 2025, from 10:30 a.m. - 12:30 p.m., in-class</strong>. 
                    It is comprehensive, covering all course concepts (Weeks 1-13). 
                    The exam is proctored in-class with additional time available via TA proctored sessions. 
                    It includes all assessment types, balanced to complement the learning structure.
                </p>
            </div>

            <h3 style="font-size: 1.25rem; color: var(--text-dark); margin-top: 1.5rem; margin-bottom: 1rem;">Assessment Types</h3>
            
            <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-top: 1rem; margin-bottom: 0.5rem;">Code Tracing Exercises</h4>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    You'll be given a piece of code and asked to trace through its execution step-by-step, 
                    determining what the output would be or how variables change over time. This helps build 
                    your ability to read and understand code flow.
                </p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-top: 1rem; margin-bottom: 0.5rem;">Parsons Problems</h4>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    You'll be given code blocks that are out of order and asked to arrange them in the correct 
                    sequence to solve a problem or create a specific output. This tests your understanding of 
                    program structure and logic flow.
                </p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-top: 1rem; margin-bottom: 0.5rem;">Code Explanation Exercises</h4>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    You'll analyze existing code and explain what it does, how it works, or identify specific 
                    elements within it. This demonstrates your ability to read and understand code written by others.
                </p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-top: 1rem; margin-bottom: 0.5rem;">Code Writing Tasks</h4>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    You'll write code from scratch to solve a specific problem or create a particular visual output. 
                    These tasks assess your ability to apply concepts and write functional code independently.
                </p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-top: 1rem; margin-bottom: 0.5rem;">Practice Problems</h4>
                <p style="color: var(--text-medium); line-height: 1.8; margin-bottom: 0.5rem;">
                    A mix of questions and exercises covering the week's concepts. These may include multiple-choice 
                    questions, short-answer responses, or small coding challenges.
                </p>
            </div>

            <div style="background-color: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; padding: 1.5rem; margin-top: 2rem; margin-bottom: 1.5rem;">
                <h3 style="font-size: 1.25rem; color: #856404; margin-top: 0; margin-bottom: 1rem;">⚠️ Important: AI and Resource Policy</h3>
                
                <p style="color: #856404; line-height: 1.8; margin-bottom: 1rem; font-weight: 500;">
                    <strong>NO AI assistance is permitted on assessments unless specifically instructed otherwise.</strong>
                </p>
                
                <p style="color: #856404; line-height: 1.8; margin-bottom: 1rem;">
                    This means you <strong>cannot</strong> use:
                </p>
                <ul style="color: #856404; line-height: 1.8; margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li>AI chatbots (ChatGPT, Claude, Copilot, etc.)</li>
                    <li>AI code completion tools (GitHub Copilot, Tabnine, etc.)</li>
                    <li>AI-powered code generators or assistants</li>
                    <li>Any automated code-writing assistance</li>
                </ul>

                <p style="color: #856404; line-height: 1.8; margin-bottom: 1rem;">
                    You <strong>CAN</strong> use:
                </p>
                <ul style="color: #856404; line-height: 1.8; margin-left: 1.5rem; margin-bottom: 0;">
                    <li>This class website and all its resources</li>
                    <li>Class code examples and tutorials</li>
                    <li>Shared sketches from class discussions</li>
                    <li>Official p5.js reference documentation</li>
                    <li>Your own notes and previous work</li>
                </ul>

                <p style="color: #856404; line-height: 1.8; margin-top: 1rem; margin-bottom: 0; font-weight: 500;">
                    <strong>If an assessment specifically instructs you to use AI, you may do so—but only then.</strong> 
                    When in doubt, assume AI is not allowed.
                </p>
            </div>

            <div style="background-color: #d1ecf1; border: 2px solid #0c5460; border-radius: 8px; padding: 1.5rem; margin-top: 1.5rem;">
                <h3 style="font-size: 1.25rem; color: #0c5460; margin-top: 0; margin-bottom: 1rem;">What to Expect</h3>
                <p style="color: #0c5460; line-height: 1.8; margin-bottom: 0.5rem;">
                    Assessments are designed to be completed within a reasonable time frame, typically 30-60 minutes 
                    depending on the type and complexity. They focus on fundamental concepts covered in class and 
                    in the course materials.
                </p>
                <p style="color: #0c5460; line-height: 1.8; margin-bottom: 0;">
                    When you're ready to complete an assessment, navigate to it in your LMS (ELMS/Canvas) or attend 
                    the scheduled proctored session. Check your course schedule and announcements for specific 
                    instructions about each assessment.
                </p>
            </div>
        </section>

        <section class="assessments-section">
    `;

    const weeks = getAllWeeks();
    weeks.forEach(week => {
        if (week.tasks.assessments.length > 0) {
            html += `
                <div class="task-section">
                    <h3>Week ${week.number}: ${week.title}</h3>
            `;
            week.tasks.assessments.forEach(assessment => {
                const assessmentNumber = getAssessmentNumber(week.number, assessment.id);
                const assessmentTitleWithNumber = `Assessment #${assessmentNumber}: ${assessment.title}`;
                const dueDate = week.schedule && week.schedule.assessments && week.schedule.assessments[assessment.id] 
                    ? formatDateTime(week.schedule.assessments[assessment.id]) 
                    : null;
                html += `
                    <div class="task-item">
                        <div class="task-content">
                            <div class="task-title">${assessmentTitleWithNumber}</div>
                            <div class="task-description">
                                ${assessment.type} - Complete this assessment in your LMS.
                                ${dueDate ? `<br><strong>Due:</strong> ${dueDate}` : ''}
                            </div>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }
    });

    html += `</section>`;
    contentArea.innerHTML = html;
}

// Load assignments page
function loadAssignmentsPage() {
    const contentArea = document.getElementById('page-content');
    if (!contentArea) return;

    let html = `
        <header class="page-header">
            <h1>Assignments</h1>
            <p class="lead">Creative challenges and major projects</p>
        </header>

        <section class="assignments-section">
    `;

    const weeks = getAllWeeks();
    weeks.forEach(week => {
        if (week.tasks.assignments.length > 0) {
            // Filter out specific major projects to exclude
            const excludedIds = ['creative-challenge-02', 'creative-challenge-03', 'final-portfolio'];
            const excludedTitles = ['Interactive Drawing Tool', 'Interactive System or Game', 'Final Portfolio Project'];
            
            const filteredAssignments = week.tasks.assignments.filter(assignment => {
                return !excludedIds.includes(assignment.id) && !excludedTitles.includes(assignment.title);
            });
            
            if (filteredAssignments.length > 0) {
                html += `
                    <div class="task-section">
                        <h3>Week ${week.number}: ${week.title}</h3>
                `;
                filteredAssignments.forEach(assignment => {
                    const hasPrompt = assignment.prompt;
                    const isMajorProject = assignment.type === 'major-project' || assignment.type === 'creative-challenge' || assignment.type === 'final-portfolio';
                    const dueDate = week.schedule && week.schedule.assignments && week.schedule.assignments[assignment.id] 
                        ? formatDateTime(week.schedule.assignments[assignment.id]) 
                        : null;
                    
                    html += `
                        <div class="task-item" style="margin-bottom: 2rem;">
                            <div class="task-content">
                                <div class="task-title" style="font-size: 1.25rem; margin-bottom: 0.75rem;">${assignment.title}</div>
                                ${dueDate ? `<div style="color: var(--text-medium); margin-bottom: 1rem;"><strong>Due:</strong> ${dueDate}</div>` : ''}
                                ${hasPrompt ? `
                                    <div class="task-description" style="white-space: pre-wrap; margin-top: 0.5rem; line-height: 1.8; color: var(--text-dark); background-color: ${isMajorProject ? 'var(--bg-white)' : 'transparent'}; padding: ${isMajorProject ? '1.5rem' : '0'}; border-radius: ${isMajorProject ? '8px' : '0'}; border-left: ${isMajorProject ? '4px solid var(--primary-color)' : 'none'};">
                                        ${escapeHtml(assignment.prompt)}
                                    </div>
                                ` : '<div class="task-description">Creative assignment</div>'}
                            </div>
                        </div>
                    `;
                });
                html += `</div>`;
            }
        }
    });

    html += `</section>`;
    contentArea.innerHTML = html;
}

// Load resources page
function loadResourcesPage() {
    const contentArea = document.getElementById('page-content');
    if (!contentArea) return;

    const resources = courseData.resources;

    let html = `
        <header class="page-header">
            <h1>Student Resources</h1>
            <p class="lead">Setup guides, FAQs, troubleshooting, documentation, and recommended tutorials</p>
        </header>

        <section class="resources-section">
            <div class="task-section">
                <h3>Setup Guides</h3>
    `;

    resources.setup.forEach((resource, index) => {
        const resourceId = `setup-${index}`;
        const hasContent = resource.content && resource.content.trim().length > 0;
        
        if (hasContent) {
            html += createCollapsibleResourceSection(resourceId, resource.title, resource.content);
        } else {
            html += `
                <div class="task-item">
                    <div class="task-content">
                        <div class="task-title">${resource.title}</div>
                        <div class="task-description">Content is being integrated. Please check back soon.</div>
                    </div>
                </div>
            `;
        }
    });

    html += `
            </div>

            <div class="task-section">
                <h3>FAQs</h3>
    `;

    resources.faqs.forEach((resource, index) => {
        const resourceId = `faq-${index}`;
        const hasContent = resource.content && resource.content.trim().length > 0;
        
        if (hasContent) {
            html += createCollapsibleResourceSection(resourceId, resource.title, resource.content);
        } else {
            html += `
                <div class="task-item">
                    <div class="task-content">
                        <div class="task-title">${resource.title}</div>
                        <div class="task-description">Content is being integrated. Please check back soon.</div>
                    </div>
                </div>
            `;
        }
    });

    html += `
            </div>

            <div class="task-section">
                <h3>Troubleshooting</h3>
    `;

    resources.troubleshooting.forEach((resource, index) => {
        const resourceId = `troubleshooting-${index}`;
        const hasContent = resource.content && resource.content.trim().length > 0;
        
        if (hasContent) {
            html += createCollapsibleResourceSection(resourceId, resource.title, resource.content);
        } else {
            html += `
                <div class="task-item">
                    <div class="task-content">
                        <div class="task-title">${resource.title}</div>
                        <div class="task-description">Content is being integrated. Please check back soon.</div>
                    </div>
                </div>
            `;
        }
    });

    html += `
            </div>
        </section>

        <section class="resources-section">
            <header class="page-header" style="margin-bottom: 2rem;">
                <h2>Recommended Tutorials & External Resources</h2>
                <p class="lead">Curated links to high-quality creative coding tutorials and resources from authoritative sources</p>
            </header>
    `;

    // Render external tutorials by category
    if (resources.externalTutorials && resources.externalTutorials.length > 0) {
        resources.externalTutorials.forEach(category => {
            html += `
            <div class="task-section">
                <h3>${category.category}</h3>
            `;

            category.items.forEach(item => {
                html += `
                <div class="task-item">
                    <div class="task-content">
                        <div class="task-title">${item.title}</div>
                        ${item.description ? `<div class="task-description">${item.description}</div>` : ''}
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="task-link" aria-label="Visit ${item.title} (opens in new window)">Visit Resource <span aria-hidden="true">→</span></a>
                    </div>
                </div>
                `;
            });

            html += `
            </div>
            `;
        });
    }

    html += `</section>`;
    contentArea.innerHTML = html;
}

// Key Concepts Collapsible Functionality
const keyConceptsCache = {}; // Cache loaded HTML content
// Clear cache on page load to ensure fresh content
if (typeof window !== 'undefined' && window.location) {
    // Clear cache when page loads to pick up file changes
    Object.keys(keyConceptsCache).forEach(key => delete keyConceptsCache[key]);
}

function toggleKeyConcepts(weekId) {
    const contentWrapper = document.getElementById(`keyConcepts-content-${weekId}`);
    const toggleButton = document.getElementById(`keyConcepts-toggle-${weekId}`);
    const toggleIcon = toggleButton.querySelector('.toggle-icon');
    const toggleText = toggleButton.querySelector('.toggle-text');
    const isExpanded = contentWrapper.getAttribute('aria-expanded') === 'true';
    const weekNumber = parseInt(weekId.replace('week-', ''));
    const week = getWeekByNumber(weekNumber);
    const ariaLiveRegion = document.getElementById('aria-live-region');
    
    if (isExpanded) {
        // Collapse
        contentWrapper.style.display = 'none';
        contentWrapper.setAttribute('aria-hidden', 'true');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleIcon.textContent = '▼';
        toggleText.textContent = 'Show';
        
        // Announce collapse to screen readers
        if (ariaLiveRegion) {
            ariaLiveRegion.textContent = `Key concepts for Week ${weekNumber} collapsed`;
        }
    } else {
        // Expand
        contentWrapper.style.display = 'block';
        contentWrapper.setAttribute('aria-hidden', 'false');
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleIcon.textContent = '▲';
        toggleText.textContent = 'Hide';
        
        // Announce expansion to screen readers
        if (ariaLiveRegion) {
            ariaLiveRegion.textContent = `Key concepts for Week ${weekNumber} expanded`;
        }
        
        // Load content if not already loaded
        if (!keyConceptsCache[weekId]) {
            loadKeyConceptsContent(weekId);
        }
    }
}

function loadKeyConceptsContent(weekId) {
    // weekId is in format "week-01", extract number
    const weekNumber = parseInt(weekId.replace('week-', ''));
    const week = getWeekByNumber(weekNumber);
    if (!week || !week.tasks.keyConcepts.htmlFile) {
        showKeyConceptsError(weekId);
        return;
    }
    
    const loadingEl = document.getElementById(`keyConcepts-loading-${weekId}`);
    const errorEl = document.getElementById(`keyConcepts-error-${weekId}`);
    const contentEl = document.getElementById(`keyConcepts-html-${weekId}`);
    
    // Check cache first
    if (keyConceptsCache[weekId]) {
        contentEl.innerHTML = keyConceptsCache[weekId];
        loadingEl.style.display = 'none';
        errorEl.style.display = 'none';
        
        // Setup code copy functionality for cached content
        setupCodeCopyForKeyConcepts(contentEl);
        
        // Add syntax highlighting for cached content
        if (typeof hljs !== 'undefined' && hljs.highlightAll) {
            hljs.highlightAll();
        } else if (typeof hljs !== 'undefined' && hljs.highlightElement) {
            contentEl.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightElement(block);
            });
        }
        
        return;
    }
    
    // Show loading state
    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';
    contentEl.innerHTML = '';
    
    // Announce loading to screen readers
    const ariaLiveRegion = document.getElementById('aria-live-region');
    if (ariaLiveRegion) {
        ariaLiveRegion.textContent = 'Loading key concepts content...';
    }
    
    // Fetch HTML content
    // Resolve path relative to current page location
    const htmlFilePath = week.tasks.keyConcepts.htmlFile;
    const resolvedPath = new URL(htmlFilePath, window.location.href).href;
    
    // Add cache-busting parameter to force fresh content
    const separator = resolvedPath.includes('?') ? '&' : '?';
    const fetchUrl = `${resolvedPath}${separator}v=${Date.now()}`;
    
    fetch(fetchUrl, { cache: 'no-cache' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} - File: ${htmlFilePath}`);
            }
            return response.text();
        })
        .then(html => {
            // Cache the content
            keyConceptsCache[weekId] = html;
            
            // Insert into page
            contentEl.innerHTML = html;
            
            // Hide loading, show content
            loadingEl.style.display = 'none';
            errorEl.style.display = 'none';
            
            // Add syntax highlighting if highlight.js is available
            if (typeof hljs !== 'undefined' && hljs.highlightAll) {
                // Use highlightAll for automatic highlighting
                hljs.highlightAll();
            } else if (typeof hljs !== 'undefined' && hljs.highlightElement) {
                // Fallback to manual highlighting
                contentEl.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            }
            
            // Setup code copy functionality for code blocks
            setupCodeCopyForKeyConcepts(contentEl);
            
            // Announce content loaded to screen readers
            const ariaLiveRegion = document.getElementById('aria-live-region');
            if (ariaLiveRegion) {
                const codeBlockCount = contentEl.querySelectorAll('pre[role="region"]').length;
                ariaLiveRegion.textContent = `Key concepts content loaded. ${codeBlockCount} code example${codeBlockCount !== 1 ? 's' : ''} available.`;
            }
        })
        .catch(error => {
            showKeyConceptsError(weekId);
        });
}

function setupCodeCopyForKeyConcepts(contentEl) {
    // Function disabled - "Try on OpenProcessing" buttons removed from key concepts areas
    // Find all code blocks in key concepts
    // const codeBlocks = contentEl.querySelectorAll('pre[role="region"]');
    
    // codeBlocks.forEach((preBlock, index) => {
    //     // Check if button already exists
    //     if (preBlock.nextElementSibling && preBlock.nextElementSibling.classList.contains('try-on-openprocessing')) {
    //         return; // Already has a button
    //     }
        
    //     // Extract code from the code block
    //     const codeElement = preBlock.querySelector('code');
    //     if (!codeElement) return;
        
    //     const code = codeElement.textContent.trim();
    //     if (!code) return;
        
    //     // Create "Try on OpenProcessing" button
    //     const button = document.createElement('a');
    //     button.href = 'https://openprocessing.org/sketch/create';
    //     button.target = '_blank';
    //     button.rel = 'noopener noreferrer';
    //     button.className = 'try-button try-on-openprocessing';
    //     button.setAttribute('data-code', code);
    //     button.setAttribute('aria-label', `Try code example ${index + 1} on OpenProcessing (opens in new window)`);
    //     button.innerHTML = 'Try on OpenProcessing <span aria-hidden="true">→</span>';
        
    //     // Add click handler
    //     button.addEventListener('click', async (e) => {
    //         e.preventDefault();
            
    //         if (typeof CodeCopyManager !== 'undefined') {
    //             await CodeCopyManager.copyCodeAndOpenOpenProcessing(code, e);
    //         } else {
    //             // Fallback: just open OpenProcessing
    //             window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
    //         }
    //     });
        
    //     // Insert button after the code block
    //     preBlock.parentNode.insertBefore(button, preBlock.nextSibling);
    // });
}

function showKeyConceptsError(weekId) {
    const loadingEl = document.getElementById(`keyConcepts-loading-${weekId}`);
    const errorEl = document.getElementById(`keyConcepts-error-${weekId}`);
    const contentEl = document.getElementById(`keyConcepts-html-${weekId}`);
    
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
    contentEl.innerHTML = '';
    
    // Announce error to screen readers
    const ariaLiveRegion = document.getElementById('aria-live-region');
    if (ariaLiveRegion) {
        ariaLiveRegion.textContent = 'Error loading key concepts content. Please try again or use the PDF download link.';
    }
}

// Make functions globally available
window.toggleTask = toggleTask;
window.checkCertificateEligibility = checkCertificateEligibility;
window.toggleKeyConcepts = toggleKeyConcepts;
window.generateCertificate = function(weekId, type) {
    // This will be implemented in certificate.js
    if (typeof CertificateGenerator !== 'undefined') {
        CertificateGenerator.generate(weekId, type);
    }
};


