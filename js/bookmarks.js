// Bookmarks System
// Allows students to bookmark content for quick access

const BookmarkManager = {
    // Initialize bookmarks
    init() {
        if (!localStorage.getItem('creativeCodingBookmarks')) {
            localStorage.setItem('creativeCodingBookmarks', JSON.stringify([]));
        }
    },

    // Get all bookmarks
    getBookmarks() {
        return JSON.parse(localStorage.getItem('creativeCodingBookmarks') || '[]');
    },

    // Save bookmarks
    saveBookmarks(bookmarks) {
        localStorage.setItem('creativeCodingBookmarks', JSON.stringify(bookmarks));
    },

    // Add bookmark
    addBookmark(type, id, title, url, metadata = {}) {
        const bookmarks = this.getBookmarks();
        const bookmarkId = `${type}-${id}`;
        
        // Check if already bookmarked
        if (bookmarks.find(b => b.id === bookmarkId)) {
            return false;
        }

        bookmarks.push({
            id: bookmarkId,
            type: type,
            originalId: id,
            title: title,
            url: url,
            metadata: metadata,
            dateAdded: new Date().toISOString()
        });
        
        this.saveBookmarks(bookmarks);
        this.updateBookmarkButtons();
        return true;
    },

    // Remove bookmark
    removeBookmark(bookmarkId) {
        const bookmarks = this.getBookmarks();
        const filtered = bookmarks.filter(b => b.id !== bookmarkId);
        this.saveBookmarks(filtered);
        this.updateBookmarkButtons();
    },

    // Check if item is bookmarked
    isBookmarked(type, id) {
        const bookmarks = this.getBookmarks();
        const bookmarkId = `${type}-${id}`;
        return bookmarks.some(b => b.id === bookmarkId);
    },

    // Update bookmark button states
    updateBookmarkButtons() {
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            const type = btn.getAttribute('data-bookmark-type');
            const id = btn.getAttribute('data-bookmark-id');
            const isBooked = this.isBookmarked(type, id);
            
            btn.classList.toggle('bookmarked', isBooked);
            btn.setAttribute('aria-label', isBooked ? 'Remove bookmark' : 'Add bookmark');
            btn.innerHTML = isBooked ? '★' : '☆';
        });
    },

    // Show toast notification
    showToast(message) {
        // Use existing toast system if available, otherwise create simple alert
        if (typeof showToast === 'function') {
            showToast(message);
        } else {
            const liveRegion = document.getElementById('aria-live-region');
            if (liveRegion) {
                liveRegion.textContent = message;
            }
        }
    }
};

// Initialize bookmarks on page load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        BookmarkManager.init();
        BookmarkManager.updateBookmarkButtons();
    });
}

// Make available globally
if (typeof window !== 'undefined') {
    window.BookmarkManager = BookmarkManager;
}











