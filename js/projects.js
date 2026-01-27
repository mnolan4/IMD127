// Projects Page Functionality
// Displays major creative projects (Creative Challenge 2, Creative Challenge 3, Final Portfolio)

// Helper function to get all weeks (if not available globally)
function getAllWeeksForProjects() {
    if (typeof getAllWeeks === 'function') {
        return getAllWeeks();
    }
    if (typeof courseData !== 'undefined' && courseData.weeks) {
        return courseData.weeks;
    }
    return [];
}

// Helper function to format date (if not available globally)
function formatDateTimeForProjects(dateTimeString) {
    if (typeof formatDateTime === 'function') {
        return formatDateTime(dateTimeString);
    }
    if (!dateTimeString) return '';
    const date = new Date(dateTimeString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

// Helper function to escape HTML (if not available globally)
function escapeHtmlForProjects(text) {
    if (typeof escapeHtml === 'function') {
        return escapeHtml(text);
    }
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function loadProjectsPage() {
    const contentArea = document.getElementById('page-content');
    if (!contentArea) return;

    // Get all major projects (Major Project 1, Creative Challenge 2, Creative Challenge 3, Final Portfolio)
    const majorProjects = [];
    const projectIds = ['major-project-01', 'creative-challenge-02', 'creative-challenge-03', 'final-portfolio'];
    
    if (typeof courseData !== 'undefined' && courseData.weeks) {
        courseData.weeks.forEach(week => {
            if (week.tasks && week.tasks.assignments) {
                week.tasks.assignments.forEach(assignment => {
                    if (projectIds.includes(assignment.id)) {
                        majorProjects.push({
                            ...assignment,
                            weekNumber: week.number,
                            weekTitle: week.title
                        });
                    }
                });
            }
        });
    }

    // Sort by week number
    majorProjects.sort((a, b) => a.weekNumber - b.weekNumber);

    // Build HTML
    let html = `
        <header class="page-header">
            <h1>Major Projects</h1>
            <p class="lead">Major creative projects that integrate multiple concepts and allow for artistic exploration.</p>
        </header>

        <section class="assignments-section">
    `;

    majorProjects.forEach(project => {
        const hasPrompt = project.prompt;
        const week = getAllWeeksForProjects().find(w => w.number === project.weekNumber);
        const dueDate = week?.schedule?.assignments?.[project.id] 
            ? formatDateTimeForProjects(week.schedule.assignments[project.id]) 
            : null;
        
        html += `
            <div class="task-section">
                <div class="major-project-card" style="background-color: var(--bg-white); border-radius: 12px; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-left: 4px solid var(--primary-color);">
                    <div class="task-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-dark);">
                        ${project.title}
                    </div>
                    <div style="color: var(--primary-color); font-weight: 500; margin-bottom: 1rem;">
                        Week ${project.weekNumber}: ${project.weekTitle}
                    </div>
                    ${dueDate ? `<div style="color: var(--text-medium); margin-bottom: 1.5rem;"><strong>Due:</strong> ${dueDate}</div>` : ''}
                    ${hasPrompt ? `
                        <div class="task-description" style="white-space: pre-wrap; line-height: 1.8; color: var(--text-dark);">
                            ${escapeHtmlForProjects(project.prompt)}
                        </div>
                    ` : '<div class="task-description">Major creative project</div>'}
                </div>
            </div>
        `;
    });

    html += `</section>`;

    contentArea.innerHTML = html;
}
