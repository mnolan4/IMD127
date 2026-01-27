// Certificate Generation System
// Creates and downloads completion certificates

const CertificateGenerator = {
    // Generate certificate
    generate(weekId, type = 'week') {
        if (type === 'week') {
            const week = getWeek(weekId);
            if (!week) return;
            
            // Check if week is complete
            if (!ProgressManager.isWeekComplete(weekId)) {
                // Use accessible alternative to alert
                const liveRegion = document.getElementById('aria-live-region');
                if (liveRegion) {
                    liveRegion.textContent = 'Please complete all tasks for this week before generating a certificate.';
                }
                // Still show alert as fallback but make it accessible
                const confirmed = window.confirm('Please complete all tasks for this week before generating a certificate.');
                return;
            }

            this.generateWeekCertificate(week);
        } else if (type === 'section') {
            this.generateSectionCertificate(weekId);
        } else if (type === 'course') {
            this.generateCourseCertificate();
        }
    },

    // Generate week certificate
    generateWeekCertificate(week) {
        // Get student name (optional)
        let studentName = localStorage.getItem('studentName') || '';
        if (!studentName) {
            studentName = prompt('Enter your name for the certificate (optional, leave blank to skip):') || 'Student';
            if (studentName !== 'Student') {
                localStorage.setItem('studentName', studentName);
            }
        }

        const date = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        // Create certificate HTML
        const certificateHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate - Week ${week.number}</title>
    <style>
            @media print {
            @page {
                size: letter;
                margin: 0.5in;
            }
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            body { 
                margin: 0;
                padding: 0;
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            .no-print { display: none !important; }
            .certificate {
                margin: 0 !important;
                padding: 2rem !important;
                border: 8px solid #4a90e2 !important;
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
                page-break-inside: avoid;
            }
            .certificate-name {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
                color: #4a90e2 !important;
                border-bottom-color: #4a90e2 !important;
            }
            .certificate-title, .certificate-subtitle, .certificate-text, .certificate-detail {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
        body {
            font-family: 'Times New Roman', serif;
            margin: 0;
            padding: 2rem;
            background: white;
            color: #2c3e50;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .certificate {
            max-width: 800px;
            width: 100%;
            margin: 0 auto;
            border: 8px solid #4a90e2;
            padding: 3rem;
            background: white;
            text-align: center;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            box-sizing: border-box;
        }
        .certificate-header {
            margin-bottom: 2rem;
        }
        .certificate-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }
        .certificate-subtitle {
            font-size: 1.2rem;
            color: #7f8c8d;
            margin-bottom: 2rem;
        }
        .certificate-body {
            margin: 2rem 0;
            line-height: 2;
        }
        .certificate-name {
            font-size: 2rem;
            font-weight: bold;
            color: #4a90e2;
            margin: 1rem 0;
            padding: 0.5rem;
            border-bottom: 2px solid #4a90e2;
            display: inline-block;
        }
        .certificate-text {
            font-size: 1.1rem;
            line-height: 1.8;
            margin: 1.5rem 0;
        }
        .certificate-details {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 2px solid #e1e8ed;
        }
        .certificate-detail {
            margin: 0.5rem 0;
            font-size: 1rem;
        }
        .certificate-date {
            margin-top: 2rem;
            font-size: 1rem;
            color: #7f8c8d;
        }
        .certificate-id {
            margin-top: 1rem;
            font-size: 0.875rem;
            color: #bdc3c7;
        }
        .download-btn {
            margin-top: 2rem;
            padding: 1rem 2rem;
            background: #4a90e2;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
        }
        .download-btn:hover {
            background: #357abd;
        }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="certificate-header">
            <div class="certificate-title">Certificate of Completion</div>
            <div class="certificate-subtitle">Creative Coding Course</div>
        </div>
        
        <div class="certificate-body">
            <div class="certificate-text">This certifies that</div>
            <div class="certificate-name">${studentName}</div>
            <div class="certificate-text">
                has successfully completed<br>
                <strong>Week ${week.number}: ${week.title}</strong>
            </div>
        </div>

        <div class="certificate-details">
            <div class="certificate-detail"><strong>Topics Covered:</strong> ${week.topics.join(', ')}</div>
            <div class="certificate-detail"><strong>Deliverables:</strong> ${week.deliverables.join(', ')}</div>
        </div>

        <div class="certificate-date">
            Date: ${date}
        </div>

        <div class="certificate-id">
            Certificate ID: CC-WEEK-${String(week.number).padStart(2, '0')}-${Date.now().toString(36).toUpperCase()}
        </div>
    </div>

    <div class="no-print" style="text-align: center; margin-top: 2rem;">
        <button class="download-btn" id="print-btn" onclick="printCertificate()">Print / Save as PDF</button>
        <p style="margin-top: 1rem; color: #7f8c8d;">Use your browser's print function to save as PDF</p>
    </div>
    <script>
        function printCertificate() {
            // Ensure content is fully rendered before printing
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(() => window.print(), 100);
                });
            } else {
                // Force a reflow to ensure everything is rendered
                document.body.offsetHeight;
                setTimeout(() => window.print(), 100);
            }
        }
        
        // Ensure content is fully loaded and rendered
        window.addEventListener('load', function() {
            // Force reflow to ensure all styles are applied
            document.body.offsetHeight;
            
            // Small delay to ensure fonts and images are loaded
            setTimeout(() => {
                // Content is now ready
            }, 200);
        });
        
        // Also check when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                document.body.offsetHeight; // Force reflow
            });
        } else {
            document.body.offsetHeight; // Force reflow immediately
        }
    </script>
</body>
</html>
        `;

        // Open certificate in new window
        const certWindow = window.open('', '_blank', 'width=900,height=700');
        if (!certWindow) {
            alert('Please allow pop-ups for this site to generate certificates.');
            return;
        }

        // Write content to window
        certWindow.document.open();
        certWindow.document.write(certificateHTML);
        certWindow.document.close();

        // Prevent window from being closed accidentally
        certWindow.addEventListener('beforeunload', (e) => {
            // Allow closing, but this ensures we can track it
        });

        // Wait for window to fully load before allowing print
        const checkReady = () => {
            try {
                if (certWindow.closed) {
                    return;
                }
                
                if (certWindow.document && certWindow.document.readyState === 'complete') {
                    // Force a reflow to ensure content is rendered
                    if (certWindow.document.body) {
                        certWindow.document.body.offsetHeight;
                        
                        // Small delay to ensure all styles are applied
                        setTimeout(() => {
                            // Mark certificate as earned
                            ProgressManager.earnCertificate(week.id, 'week');
                            ProgressManager.updateUI();
                            
                            // Focus the window
                            if (!certWindow.closed) {
                                certWindow.focus();
                            }
                        }, 500);
                    }
                } else {
                    // Keep checking until ready
                    setTimeout(checkReady, 100);
                }
            } catch (e) {
                // Silently handle errors
            }
        };

        // Start checking when DOM is ready
        try {
            if (certWindow.document.readyState === 'loading') {
                certWindow.document.addEventListener('DOMContentLoaded', checkReady);
            } else {
                // Wait a bit for document to be ready
                setTimeout(checkReady, 100);
            }

            // Also listen for window load event
            certWindow.addEventListener('load', () => {
                setTimeout(() => {
                    try {
                        if (!certWindow.closed && certWindow.document.body) {
                            certWindow.document.body.offsetHeight; // Force reflow
                            certWindow.focus();
                        }
                    } catch (e) {
                        // Silently handle errors
                    }
                }, 300);
            });
        } catch (e) {
            // Silently handle errors
        }
    },

    // Generate section certificate
    generateSectionCertificate(sectionId) {
        const section = getSection(sectionId);
        if (!section) return;

        // Check if all weeks in section are complete
        const allComplete = section.weeks.every(weekNum => {
            const week = getWeekByNumber(weekNum);
            return week && ProgressManager.isWeekComplete(week.id);
        });

        if (!allComplete) {
            const liveRegion = document.getElementById('aria-live-region');
            if (liveRegion) {
                liveRegion.textContent = 'Please complete all weeks in this section before generating a certificate.';
            }
            window.confirm('Please complete all weeks in this section before generating a certificate.');
            return;
        }

        let studentName = localStorage.getItem('studentName') || 'Student';
        if (studentName === 'Student') {
            studentName = prompt('Enter your name for the certificate (optional, leave blank to skip):') || 'Student';
            if (studentName !== 'Student') {
                localStorage.setItem('studentName', studentName);
            }
        }

        const date = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        const certificateHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Certificate - ${section.title}</title>
    <style>
            @media print {
            @page {
                size: letter;
                margin: 0.5in;
            }
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            body { 
                margin: 0;
                padding: 0;
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            .no-print { display: none !important; }
            .certificate {
                margin: 0 !important;
                padding: 2rem !important;
                border: 8px solid #4a90e2 !important;
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
                page-break-inside: avoid;
            }
            .certificate-name {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
                color: #4a90e2 !important;
                border-bottom-color: #4a90e2 !important;
            }
            .certificate-title, .certificate-subtitle, .certificate-text, .certificate-detail {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        }
        body {
            font-family: 'Times New Roman', serif;
            margin: 0;
            padding: 2rem;
            background: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .certificate {
            max-width: 800px;
            width: 100%;
            margin: 0 auto;
            border: 8px solid #4a90e2;
            padding: 3rem;
            text-align: center;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            box-sizing: border-box;
        }
        .certificate-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        .certificate-name {
            font-size: 2rem;
            font-weight: bold;
            color: #4a90e2;
            margin: 1rem 0;
            padding: 0.5rem;
            border-bottom: 2px solid #4a90e2;
            display: inline-block;
        }
        .certificate-text {
            font-size: 1.1rem;
            line-height: 1.8;
            margin: 1.5rem 0;
        }
        .download-btn {
            margin-top: 2rem;
            padding: 1rem 2rem;
            background: #4a90e2;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="certificate-title">Certificate of Completion</div>
        <div class="certificate-text">This certifies that</div>
        <div class="certificate-name">${studentName}</div>
        <div class="certificate-text">
            has successfully completed<br>
            <strong>${section.title}</strong><br>
            ${section.description}
        </div>
        <div style="margin-top: 2rem;">Date: ${date}</div>
    </div>
    <div class="no-print" style="text-align: center; margin-top: 2rem;">
        <button class="download-btn" id="print-btn" onclick="printCertificate()">Print / Save as PDF</button>
    </div>
    <script>
        function printCertificate() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(() => window.print(), 100);
                });
            } else {
                document.body.offsetHeight;
                setTimeout(() => window.print(), 100);
            }
        }
        
        window.addEventListener('load', function() {
            document.body.offsetHeight;
            setTimeout(() => {
                // Content ready
            }, 200);
        });
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                document.body.offsetHeight;
            });
        } else {
            document.body.offsetHeight;
        }
    </script>
</body>
</html>
        `;

        const certWindow = window.open('', '_blank', 'width=900,height=700');
        if (!certWindow) {
            alert('Please allow pop-ups for this site to generate certificates.');
            return;
        }

        certWindow.document.open();
        certWindow.document.write(certificateHTML);
        certWindow.document.close();

        // Wait for content to be ready
        const checkReady = () => {
            try {
                if (certWindow.closed) return;
                
                if (certWindow.document && certWindow.document.readyState === 'complete') {
                    if (certWindow.document.body) {
                        certWindow.document.body.offsetHeight; // Force reflow
                        setTimeout(() => {
                            ProgressManager.earnCertificate(sectionId, 'section');
                            ProgressManager.updateUI();
                            if (!certWindow.closed) {
                                certWindow.focus();
                            }
                        }, 500);
                    }
                } else {
                    setTimeout(checkReady, 100);
                }
            } catch (e) {
                // Silently handle errors
            }
        };

        try {
            if (certWindow.document.readyState === 'loading') {
                certWindow.document.addEventListener('DOMContentLoaded', checkReady);
            } else {
                setTimeout(checkReady, 100);
            }

            certWindow.addEventListener('load', () => {
                setTimeout(() => {
                    try {
                        if (!certWindow.closed && certWindow.document.body) {
                            certWindow.document.body.offsetHeight;
                            certWindow.focus();
                        }
                    } catch (e) {
                        // Silently handle errors
                    }
                }, 300);
            });
        } catch (e) {
            // Silently handle errors
        }
    },

    // Generate course completion certificate
    generateCourseCertificate() {
        // Check if all weeks are complete
        const allWeeksComplete = getAllWeeks().every(week => 
            ProgressManager.isWeekComplete(week.id)
        );

        if (!allWeeksComplete) {
            const liveRegion = document.getElementById('aria-live-region');
            if (liveRegion) {
                liveRegion.textContent = 'Please complete all weeks before generating the course completion certificate.';
            }
            window.confirm('Please complete all weeks before generating the course completion certificate.');
            return;
        }

        let studentName = localStorage.getItem('studentName') || 'Student';
        if (studentName === 'Student') {
            studentName = prompt('Enter your name for the certificate (optional, leave blank to skip):') || 'Student';
            if (studentName !== 'Student') {
                localStorage.setItem('studentName', studentName);
            }
        }

        const date = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        const certificateHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Course Completion Certificate</title>
    <style>
        @media print {
            @page {
                size: letter;
                margin: 0.5in;
            }
            body { 
                margin: 0;
                padding: 0;
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .no-print { display: none !important; }
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            .certificate {
                margin: 0 !important;
                padding: 2rem !important;
                border: 10px solid #4a90e2 !important;
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
                page-break-inside: avoid;
            }
        }
        body {
            font-family: 'Times New Roman', serif;
            margin: 0;
            padding: 2rem;
            background: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .certificate {
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
            border: 10px solid #4a90e2;
            padding: 4rem;
            text-align: center;
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            box-sizing: border-box;
        }
        .certificate-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        .certificate-subtitle {
            font-size: 1.5rem;
            color: #7f8c8d;
            margin-bottom: 2rem;
        }
        .certificate-name {
            font-size: 2.5rem;
            font-weight: bold;
            color: #4a90e2;
            margin: 1.5rem 0;
            padding: 1rem;
            border-bottom: 3px solid #4a90e2;
            display: inline-block;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
        .certificate-text {
            font-size: 1.3rem;
            line-height: 2;
            margin: 2rem 0;
        }
        .certificate-details {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 2px solid #e1e8ed;
            font-size: 1.1rem;
        }
        .download-btn {
            margin-top: 2rem;
            padding: 1rem 2rem;
            background: #4a90e2;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 1.1rem;
            cursor: pointer;
        }
        .download-btn:hover {
            background: #357abd;
        }
    </style>
</head>
<body>
    <div class="certificate">
        <div class="certificate-title">Certificate of Completion</div>
        <div class="certificate-subtitle">Creative Coding Course</div>
        
        <div class="certificate-text">This certifies that</div>
        <div class="certificate-name">${studentName}</div>
        <div class="certificate-text">
            has successfully completed the<br>
            <strong>Introduction to Creative Coding for Artists</strong><br>
            a 15-week course in JavaScript and p5.js
        </div>

        <div class="certificate-details">
            <div>Duration: 15 weeks</div>
            <div>Date: ${date}</div>
            <div style="margin-top: 1rem; font-size: 0.9rem; color: #7f8c8d;">
                Certificate ID: CC-COURSE-${Date.now().toString(36).toUpperCase()}
            </div>
        </div>
    </div>

    <div class="no-print" style="text-align: center; margin-top: 2rem;">
        <button class="download-btn" id="print-btn" onclick="printCertificate()">Print / Save as PDF</button>
        <p style="margin-top: 1rem; color: #7f8c8d;">Use your browser's print function to save as PDF</p>
    </div>
    <script>
        function printCertificate() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(() => window.print(), 100);
                });
            } else {
                document.body.offsetHeight;
                setTimeout(() => window.print(), 100);
            }
        }
        
        window.addEventListener('load', function() {
            document.body.offsetHeight;
            setTimeout(() => {
                // Content ready
            }, 200);
        });
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                document.body.offsetHeight;
            });
        } else {
            document.body.offsetHeight;
        }
    </script>
</body>
</html>
        `;

        const certWindow = window.open('', '_blank', 'width=900,height=700');
        if (!certWindow) {
            alert('Please allow pop-ups for this site to generate certificates.');
            return;
        }

        certWindow.document.open();
        certWindow.document.write(certificateHTML);
        certWindow.document.close();

        // Wait for content to be ready
        const checkReady = () => {
            try {
                if (certWindow.closed) return;
                
                if (certWindow.document && certWindow.document.readyState === 'complete') {
                    if (certWindow.document.body) {
                        certWindow.document.body.offsetHeight; // Force reflow
                        setTimeout(() => {
                            ProgressManager.earnCertificate('course', 'course');
                            ProgressManager.updateUI();
                            if (!certWindow.closed) {
                                certWindow.focus();
                            }
                        }, 500);
                    }
                } else {
                    setTimeout(checkReady, 100);
                }
            } catch (e) {
                // Silently handle errors
            }
        };

        try {
            if (certWindow.document.readyState === 'loading') {
                certWindow.document.addEventListener('DOMContentLoaded', checkReady);
            } else {
                setTimeout(checkReady, 100);
            }

            certWindow.addEventListener('load', () => {
                setTimeout(() => {
                    try {
                        if (!certWindow.closed && certWindow.document.body) {
                            certWindow.document.body.offsetHeight;
                            certWindow.focus();
                        }
                    } catch (e) {
                        // Silently handle errors
                    }
                }, 300);
            });
        } catch (e) {
            // Silently handle errors
        }
    }
};

// Make available globally
window.CertificateGenerator = CertificateGenerator;


