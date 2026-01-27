// Code Copying to OpenProcessing
// Extracts code from page and copies to clipboard, then opens OpenProcessing

const CodeCopyManager = {
    // Extract code from a code block element
    extractCodeFromElement(element) {
        // Find the nearest code block (could be in .code-example or similar)
        const codeExample = element.closest('.task-item, .code-example-container, .challenge-card');
        if (!codeExample) return null;

        // Try to find code element
        const codeBlock = codeExample.querySelector('code, pre code');
        if (codeBlock) {
            return codeBlock.textContent.trim();
        }

        // Try pre element
        const preBlock = codeExample.querySelector('pre');
        if (preBlock) {
            return preBlock.textContent.trim();
        }

        return null;
    },

    // Copy code to clipboard and open OpenProcessing
    async copyCodeAndOpenOpenProcessing(code, linkElement) {
        if (!code) {
            // No code found, just open OpenProcessing normally
            window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
            return;
        }

        try {
            // Copy code to clipboard
            await navigator.clipboard.writeText(code);
            
            // Open OpenProcessing in new tab
            const openProcessingWindow = window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
            
            // Show helpful message
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const pasteKey = isMac ? 'Cmd+V' : 'Ctrl+V';
            this.showToast(`✓ Code copied to clipboard! OpenProcessing opened. Press ${pasteKey} to paste.`, 6000);
            
            // Prevent default link behavior
            if (linkElement && linkElement.preventDefault) {
                linkElement.preventDefault();
            }
            
            // Focus on the new window after a short delay
            setTimeout(() => {
                if (openProcessingWindow) {
                    openProcessingWindow.focus();
                }
            }, 500);
            
        } catch (err) {
            // Fallback if clipboard API fails
            // Try fallback method
            const textArea = document.createElement('textarea');
            textArea.value = code;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
                const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
                const pasteKey = isMac ? 'Cmd+V' : 'Ctrl+V';
                this.showToast(`Code copied! Paste it in OpenProcessing with ${pasteKey}`, 5000);
                
                if (linkElement && linkElement.preventDefault) {
                    linkElement.preventDefault();
                }
            } catch (fallbackErr) {
                // Last resort: just open OpenProcessing
                window.open('https://openprocessing.org/sketch/create', '_blank', 'noopener,noreferrer');
            }
        }
    },

    // Show toast notification
    showToast(message, duration = 3000) {
        // Use ARIA live region for screen readers
        const liveRegion = document.getElementById('aria-live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
        }

        // Create visible toast if it doesn't exist
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            toast.setAttribute('role', 'status');
            toast.setAttribute('aria-live', 'polite');
            toast.setAttribute('aria-atomic', 'true');
            document.body.appendChild(toast);
        }
        
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    },

    // Initialize code copy buttons
    init() {
        // This will be called to set up code copy functionality
        // Code copy buttons will be added dynamically when content loads
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.CodeCopyManager = CodeCopyManager;
}











