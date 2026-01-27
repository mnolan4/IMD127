// Progress Tracking System
// Manages student progress using localStorage (privacy-focused - all data stays local)

const ProgressManager = {
    // Initialize progress storage
    init() {
        if (!localStorage.getItem('creativeCodingProgress')) {
            this.initializeProgress();
        }
    },

    // Initialize empty progress structure
    initializeProgress() {
        const progress = {};
        courseData.weeks.forEach(week => {
            progress[week.id] = {
                keyConcepts: false,
                examples: new Array(week.tasks.examples.length).fill(false),
                assessments: {},
                assignments: {},
                resources: new Array(week.tasks.resources.length).fill(false)
            };
        });
        localStorage.setItem('creativeCodingProgress', JSON.stringify(progress));
    },

    // Get all progress
    getProgress() {
        const stored = localStorage.getItem('creativeCodingProgress');
        if (!stored) {
            this.initializeProgress();
            return this.getProgress();
        }
        return JSON.parse(stored);
    },

    // Save progress
    saveProgress(progress) {
        localStorage.setItem('creativeCodingProgress', JSON.stringify(progress));
    },

    // Mark task as complete
    markComplete(weekId, taskType, taskIndex = null, taskId = null) {
        const progress = this.getProgress();
        
        if (!progress[weekId]) {
            progress[weekId] = {
                lecture: false,
                examples: [],
                assessments: {},
                assignments: {},
                resources: []
            };
        }

        switch(taskType) {
            case 'keyConcepts':
            case 'lecture': // Legacy support
                progress[weekId].keyConcepts = true;
                break;
            case 'example':
                if (taskIndex !== null) {
                    if (!progress[weekId].examples) {
                        progress[weekId].examples = [];
                    }
                    while (progress[weekId].examples.length <= taskIndex) {
                        progress[weekId].examples.push(false);
                    }
                    progress[weekId].examples[taskIndex] = true;
                }
                break;
            case 'assessment':
                if (taskId) {
                    progress[weekId].assessments[taskId] = true;
                }
                break;
            case 'assignment':
                if (taskId) {
                    progress[weekId].assignments[taskId] = true;
                }
                break;
            case 'resource':
                if (taskIndex !== null) {
                    if (!progress[weekId].resources) {
                        progress[weekId].resources = [];
                    }
                    while (progress[weekId].resources.length <= taskIndex) {
                        progress[weekId].resources.push(false);
                    }
                    progress[weekId].resources[taskIndex] = true;
                }
                break;
        }

        this.saveProgress(progress);
        this.updateUI();
    },

    // Mark task as incomplete
    markIncomplete(weekId, taskType, taskIndex = null, taskId = null) {
        const progress = this.getProgress();
        
        if (!progress[weekId]) return;

        switch(taskType) {
            case 'keyConcepts':
            case 'lecture': // Legacy support
                progress[weekId].keyConcepts = false;
                break;
            case 'example':
                if (taskIndex !== null && progress[weekId].examples) {
                    progress[weekId].examples[taskIndex] = false;
                }
                break;
            case 'assessment':
                if (taskId && progress[weekId].assessments) {
                    delete progress[weekId].assessments[taskId];
                }
                break;
            case 'assignment':
                if (taskId && progress[weekId].assignments) {
                    delete progress[weekId].assignments[taskId];
                }
                break;
            case 'resource':
                if (taskIndex !== null && progress[weekId].resources) {
                    progress[weekId].resources[taskIndex] = false;
                }
                break;
        }

        this.saveProgress(progress);
        this.updateUI();
    },

    // Check if task is complete
    isComplete(weekId, taskType, taskIndex = null, taskId = null) {
        const progress = this.getProgress();
        if (!progress[weekId]) return false;

        switch(taskType) {
            case 'keyConcepts':
            case 'lecture': // Legacy support
                return progress[weekId].keyConcepts === true;
            case 'example':
                if (taskIndex !== null && progress[weekId].examples) {
                    return progress[weekId].examples[taskIndex] === true;
                }
                return false;
            case 'assessment':
                if (taskId && progress[weekId].assessments) {
                    return progress[weekId].assessments[taskId] === true;
                }
                return false;
            case 'assignment':
                if (taskId && progress[weekId].assignments) {
                    return progress[weekId].assignments[taskId] === true;
                }
                return false;
            case 'resource':
                if (taskIndex !== null && progress[weekId].resources) {
                    return progress[weekId].resources[taskIndex] === true;
                }
                return false;
        }
        return false;
    },

    // Calculate week completion percentage
    getWeekProgress(weekId) {
        const week = getWeek(weekId);
        if (!week) return 0;

        const progress = this.getProgress();
        const weekProgress = progress[weekId] || {
            keyConcepts: false,
            examples: [],
            assessments: {},
            assignments: {},
            resources: []
        };

        let totalTasks = 0;
        let completedTasks = 0;

        // Key Concepts
        totalTasks++;
        if (weekProgress.keyConcepts || weekProgress.lecture) completedTasks++; // Support legacy data

        // Examples
        totalTasks += week.tasks.examples.length;
        week.tasks.examples.forEach((_, index) => {
            if (weekProgress.examples && weekProgress.examples[index]) {
                completedTasks++;
            }
        });

        // Assessments
        totalTasks += week.tasks.assessments.length;
        week.tasks.assessments.forEach(assessment => {
            if (weekProgress.assessments && weekProgress.assessments[assessment.id]) {
                completedTasks++;
            }
        });

        // Assignments
        totalTasks += week.tasks.assignments.length;
        week.tasks.assignments.forEach(assignment => {
            if (weekProgress.assignments && weekProgress.assignments[assignment.id]) {
                completedTasks++;
            }
        });

        // Resources
        totalTasks += week.tasks.resources.length;
        week.tasks.resources.forEach((_, index) => {
            if (weekProgress.resources && weekProgress.resources[index]) {
                completedTasks++;
            }
        });

        return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    },

    // Check if week is complete (all tasks done)
    isWeekComplete(weekId) {
        const week = getWeek(weekId);
        if (!week) return false;

        const progress = this.getProgress();
        const weekProgress = progress[weekId];
        if (!weekProgress) return false;

        // Check key concepts
        if (!weekProgress.keyConcepts && !weekProgress.lecture) return false; // Support legacy data

        // Check all examples
        for (let i = 0; i < week.tasks.examples.length; i++) {
            if (!weekProgress.examples || !weekProgress.examples[i]) {
                return false;
            }
        }

        // Check all assessments
        for (const assessment of week.tasks.assessments) {
            if (!weekProgress.assessments || !weekProgress.assessments[assessment.id]) {
                return false;
            }
        }

        // Check all assignments
        for (const assignment of week.tasks.assignments) {
            if (!weekProgress.assignments || !weekProgress.assignments[assignment.id]) {
                return false;
            }
        }

        // Check all resources
        for (let i = 0; i < week.tasks.resources.length; i++) {
            if (!weekProgress.resources || !weekProgress.resources[i]) {
                return false;
            }
        }

        return true;
    },

    // Get overall course progress
    getOverallProgress() {
        let totalTasks = 0;
        let completedTasks = 0;

        courseData.weeks.forEach(week => {
            const weekProgress = this.getWeekProgress(week.id);
            const weekData = getWeek(week.id);
            
            // Count tasks
            totalTasks += 1; // key concepts
            totalTasks += weekData.tasks.examples.length;
            totalTasks += weekData.tasks.assessments.length;
            totalTasks += weekData.tasks.assignments.length;
            totalTasks += weekData.tasks.resources.length;

            // Count completed
            const progress = this.getProgress();
            const wp = progress[week.id] || {};
            if (wp.keyConcepts || wp.lecture) completedTasks++; // Support legacy data
            weekData.tasks.examples.forEach((_, i) => {
                if (wp.examples && wp.examples[i]) completedTasks++;
            });
            weekData.tasks.assessments.forEach(a => {
                if (wp.assessments && wp.assessments[a.id]) completedTasks++;
            });
            weekData.tasks.assignments.forEach(a => {
                if (wp.assignments && wp.assignments[a.id]) completedTasks++;
            });
            weekData.tasks.resources.forEach((_, i) => {
                if (wp.resources && wp.resources[i]) completedTasks++;
            });
        });

        return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    },

    // Get statistics
    getStats() {
        const weeks = getAllWeeks();
        let weeksComplete = 0;
        let totalTasks = 0;
        let completedTasks = 0;

        weeks.forEach(week => {
            if (this.isWeekComplete(week.id)) {
                weeksComplete++;
            }
            totalTasks += 1 + week.tasks.examples.length + week.tasks.assessments.length + 
                          week.tasks.assignments.length + week.tasks.resources.length;
        });

        const progress = this.getProgress();
        weeks.forEach(week => {
            const wp = progress[week.id] || {};
            if (wp.keyConcepts || wp.lecture) completedTasks++; // Support legacy data
            week.tasks.examples.forEach((_, i) => {
                if (wp.examples && wp.examples[i]) completedTasks++;
            });
            week.tasks.assessments.forEach(a => {
                if (wp.assessments && wp.assessments[a.id]) completedTasks++;
            });
            week.tasks.assignments.forEach(a => {
                if (wp.assignments && wp.assignments[a.id]) completedTasks++;
            });
            week.tasks.resources.forEach((_, i) => {
                if (wp.resources && wp.resources[i]) completedTasks++;
            });
        });

        // Count certificates earned
        let certificatesEarned = 0;
        const certData = this.getCertificates();
        Object.values(certData).forEach(cert => {
            if (cert.earned) certificatesEarned++;
        });

        return {
            weeksComplete,
            tasksComplete: completedTasks,
            totalTasks,
            certificatesEarned,
            overallProgress: this.getOverallProgress()
        };
    },

    // Certificate management
    getCertificates() {
        const stored = localStorage.getItem('creativeCodingCertificates');
        return stored ? JSON.parse(stored) : {};
    },

    saveCertificates(certificates) {
        localStorage.setItem('creativeCodingCertificates', JSON.stringify(certificates));
    },

    earnCertificate(weekId, type = 'week') {
        const certificates = this.getCertificates();
        const certId = type === 'week' ? weekId : type;
        
        if (!certificates[certId]) {
            certificates[certId] = {
                earned: true,
                date: new Date().toISOString().split('T')[0],
                type: type
            };
            this.saveCertificates(certificates);
            return true;
        }
        return false;
    },

    // Clear all progress
    clearAllData() {
        // Use accessible confirmation instead of alert/confirm
        const confirmed = window.confirm('Are you sure you want to clear all progress? This cannot be undone.');
        if (confirmed) {
            localStorage.removeItem('creativeCodingProgress');
            localStorage.removeItem('creativeCodingCertificates');
            localStorage.removeItem('studentName');
            this.initializeProgress();
            this.updateUI();
            
            // Announce to screen readers
            const liveRegion = document.getElementById('aria-live-region');
            if (liveRegion) {
                liveRegion.textContent = 'All progress has been cleared.';
            }
        }
    },

    // Update UI elements (called after progress changes)
    updateUI() {
        // Update progress bar
        const overallProgress = this.getOverallProgress();
        const progressFill = document.getElementById('overall-progress');
        const progressText = document.getElementById('progress-text');
        const progressBar = document.querySelector('.progress-bar[role="progressbar"]');
        
        if (progressFill) {
            progressFill.style.width = overallProgress + '%';
        }
        if (progressText) {
            progressText.textContent = overallProgress + '% Complete';
        }
        if (progressBar) {
            progressBar.setAttribute('aria-valuenow', overallProgress);
        }
        
        // Announce progress update to screen readers
        const liveRegion = document.getElementById('aria-live-region');
        if (liveRegion) {
            liveRegion.textContent = `Progress updated: ${overallProgress}% complete`;
        }

        // Update stats on homepage
        const stats = this.getStats();
        const weeksCompleteEl = document.getElementById('weeks-complete');
        const tasksCompleteEl = document.getElementById('tasks-complete');
        const certificatesEarnedEl = document.getElementById('certificates-earned');

        if (weeksCompleteEl) weeksCompleteEl.textContent = stats.weeksComplete;
        if (tasksCompleteEl) tasksCompleteEl.textContent = stats.tasksComplete;
        if (certificatesEarnedEl) certificatesEarnedEl.textContent = stats.certificatesEarned;

        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('progressUpdated', { detail: stats }));
    }
};

// Initialize on load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        ProgressManager.init();
        ProgressManager.updateUI();
    });
}


