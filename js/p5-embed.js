// p5.js Embedding Utility
// Handles loading and executing p5.js code examples in instance mode
// Supports both global mode and instance mode code

const P5EmbedManager = {
    // Cache for loaded code to avoid re-fetching
    codeCache: {},
    
    // Track active sketches for cleanup
    activeSketches: new Map(),
    
    // Intersection Observer for lazy loading
    observer: null,
    
    /**
     * Initialize the embed manager
     */
    init() {
        // Set up Intersection Observer for lazy loading
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const container = entry.target;
                        const codeFile = container.dataset.codeFile;
                        const demoId = container.id;
                        
                        if (codeFile && !container.dataset.loaded) {
                            container.dataset.loaded = 'true';
                            this.loadDemo(demoId, codeFile, container);
                        }
                    }
                });
            }, {
                rootMargin: '50px' // Start loading 50px before visible
            });
        }
    },
    
    /**
     * Convert global mode p5.js code to instance mode
     * @param {string} code - The p5.js code in global mode
     * @returns {Function} - Sketch function for instance mode
     */
    convertToInstanceMode(code) {
        // Check if code is already in instance mode
        if (code.includes('new p5(') || code.includes('p.setup') || code.includes('p.draw')) {
            // Already in instance mode, try to extract the function
            try {
                return new Function('return ' + code)();
            } catch (e) {
                // If that fails, wrap it
                return new Function('p', code);
            }
        }
        
        // For global mode: p5.js instance mode automatically looks for setup/draw
        // functions in the function scope. We just need to make p5 functions available.
        // The simplest approach is to use 'with' statement or create aliases.
        return function(p) {
            // Make p5 functions available as globals within this function
            // p5.js instance mode will automatically find setup/draw if they're defined here
            const createCanvas = p.createCanvas.bind(p);
            const background = p.background.bind(p);
            const fill = p.fill.bind(p);
            const stroke = p.stroke.bind(p);
            const noFill = p.noFill.bind(p);
            const noStroke = p.noStroke.bind(p);
            const ellipse = p.ellipse.bind(p);
            const circle = p.circle.bind(p);
            const rect = p.rect.bind(p);
            const line = p.line.bind(p);
            const point = p.point.bind(p);
            const triangle = p.triangle.bind(p);
            const quad = p.quad.bind(p);
            const arc = p.arc.bind(p);
            const text = p.text.bind(p);
            const textSize = p.textSize.bind(p);
            const textAlign = p.textAlign.bind(p);
            const translate = p.translate.bind(p);
            const rotate = p.rotate.bind(p);
            const scale = p.scale.bind(p);
            const push = p.push.bind(p);
            const pop = p.pop.bind(p);
            const resetMatrix = p.resetMatrix.bind(p);
            const colorMode = p.colorMode.bind(p);
            const angleMode = p.angleMode.bind(p);
            const map = p.map.bind(p);
            const lerp = p.lerp.bind(p);
            const dist = p.dist.bind(p);
            const noise = p.noise.bind(p);
            const random = p.random.bind(p);
            const sin = p.sin.bind(p);
            const cos = p.cos.bind(p);
            const tan = p.tan.bind(p);
            const abs = p.abs.bind(p);
            const floor = p.floor.bind(p);
            const ceil = p.ceil.bind(p);
            const round = p.round.bind(p);
            
            
            // Execute the code - setup/draw functions will be defined in this scope
            // Then we'll assign them to p.setup, p.draw, etc.
            // We'll use eval in a controlled scope to capture function definitions
            try {
                // Create variables in this function's scope that the code can use
                // These will be available when the code is executed
                const createCanvas = p.createCanvas.bind(p);
                const background = p.background.bind(p);
                const fill = p.fill.bind(p);
                const stroke = p.stroke.bind(p);
                const noFill = p.noFill.bind(p);
                const noStroke = p.noStroke.bind(p);
                const ellipse = p.ellipse.bind(p);
                const circle = p.circle.bind(p);
                const rect = p.rect.bind(p);
                const line = p.line.bind(p);
                const point = p.point.bind(p);
                const triangle = p.triangle.bind(p);
                const quad = p.quad.bind(p);
                const arc = p.arc.bind(p);
                const text = p.text.bind(p);
                const textSize = p.textSize.bind(p);
                const textAlign = p.textAlign.bind(p);
                const translate = p.translate.bind(p);
                const rotate = p.rotate.bind(p);
                const scale = p.scale.bind(p);
                const push = p.push.bind(p);
                const pop = p.pop.bind(p);
                const resetMatrix = p.resetMatrix.bind(p);
                const colorMode = p.colorMode.bind(p);
                const angleMode = p.angleMode.bind(p);
                const map = p.map.bind(p);
                const lerp = p.lerp.bind(p);
                const dist = p.dist.bind(p);
                const noise = p.noise.bind(p);
                const random = p.random.bind(p);
                const sin = p.sin.bind(p);
                const cos = p.cos.bind(p);
                const tan = p.tan.bind(p);
                const abs = p.abs.bind(p);
                const floor = p.floor.bind(p);
                const ceil = p.ceil.bind(p);
                const round = p.round.bind(p);
                const millis = p.millis.bind(p);
                const constrain = p.constrain.bind(p);
                
                // For variables that need to be reactive, we'll create a scope object
                // and use Object.defineProperty, then execute code in that scope
                const scope = {};
                
                // Add all p5 functions to scope
                scope.createCanvas = createCanvas;
                scope.background = background;
                scope.fill = fill;
                scope.stroke = stroke;
                scope.noFill = noFill;
                scope.noStroke = noStroke;
                scope.ellipse = ellipse;
                scope.circle = circle;
                scope.rect = rect;
                scope.line = line;
                scope.point = point;
                scope.triangle = triangle;
                scope.quad = quad;
                scope.arc = arc;
                scope.text = text;
                scope.textSize = textSize;
                scope.textAlign = textAlign;
                scope.translate = translate;
                scope.rotate = rotate;
                scope.scale = scale;
                scope.push = push;
                scope.pop = pop;
                scope.resetMatrix = resetMatrix;
                scope.colorMode = colorMode;
                scope.angleMode = angleMode;
                scope.map = map;
                scope.lerp = lerp;
                scope.dist = dist;
                scope.noise = noise;
                scope.random = random;
                scope.sin = sin;
                scope.cos = cos;
                scope.tan = tan;
                scope.abs = abs;
                scope.floor = floor;
                scope.ceil = ceil;
                scope.round = round;
                scope.millis = millis;
                scope.constrain = constrain;
                
                // Add reactive properties for variables
                Object.defineProperty(scope, 'width', { get: () => p.width, enumerable: true });
                Object.defineProperty(scope, 'height', { get: () => p.height, enumerable: true });
                Object.defineProperty(scope, 'mouseX', { get: () => p.mouseX, enumerable: true });
                Object.defineProperty(scope, 'mouseY', { get: () => p.mouseY, enumerable: true });
                Object.defineProperty(scope, 'pmouseX', { get: () => p.pmouseX, enumerable: true });
                Object.defineProperty(scope, 'pmouseY', { get: () => p.pmouseY, enumerable: true });
                Object.defineProperty(scope, 'frameCount', { get: () => p.frameCount, enumerable: true });
                Object.defineProperty(scope, 'key', { get: () => p.key, enumerable: true });
                Object.defineProperty(scope, 'keyCode', { get: () => p.keyCode, enumerable: true });
                Object.defineProperty(scope, 'keyIsPressed', { get: () => p.keyIsPressed, enumerable: true });
                Object.defineProperty(scope, 'mouseIsPressed', { get: () => p.mouseIsPressed, enumerable: true });
                Object.defineProperty(scope, 'TWO_PI', { get: () => p.TWO_PI, enumerable: true });
                Object.defineProperty(scope, 'PI', { get: () => p.PI, enumerable: true });
                Object.defineProperty(scope, 'HALF_PI', { get: () => p.HALF_PI, enumerable: true });
                
                // Execute code in scope using Function constructor
                const paramNames = Object.keys(scope);
                const func = new Function(...paramNames, code);
                func.apply(scope, paramNames.map(name => scope[name]));
                
                // Map captured functions from scope to p5 instance
                if (typeof scope.setup === 'function') {
                    p.setup = scope.setup;
                }
                if (typeof scope.draw === 'function') {
                    p.draw = scope.draw;
                }
                if (typeof scope.preload === 'function') {
                    p.preload = scope.preload;
                }
                if (typeof scope.mousePressed === 'function') {
                    p.mousePressed = scope.mousePressed;
                }
                if (typeof scope.mouseReleased === 'function') {
                    p.mouseReleased = scope.mouseReleased;
                }
                if (typeof scope.mouseClicked === 'function') {
                    p.mouseClicked = scope.mouseClicked;
                }
                if (typeof scope.mouseMoved === 'function') {
                    p.mouseMoved = scope.mouseMoved;
                }
                if (typeof scope.mouseDragged === 'function') {
                    p.mouseDragged = scope.mouseDragged;
                }
                if (typeof scope.keyPressed === 'function') {
                    p.keyPressed = scope.keyPressed;
                }
                if (typeof scope.keyReleased === 'function') {
                    p.keyReleased = scope.keyReleased;
                }
                if (typeof scope.keyTyped === 'function') {
                    p.keyTyped = scope.keyTyped;
                }
            } catch (e) {
                throw e;
            }
        };
    },
    
    /**
     * Fetch code from a file
     * @param {string} codeFile - Path to the code file
     * @returns {Promise<string>} - The code content
     */
    async fetchCode(codeFile) {
        // Check cache first
        if (this.codeCache[codeFile]) {
            return this.codeCache[codeFile];
        }
        
        try {
            // Resolve path relative to current page location
            const resolvedPath = new URL(codeFile, window.location.href).href;
            const response = await fetch(resolvedPath);
            
            if (!response.ok) {
                throw new Error(`Failed to load code file: ${response.status} ${response.statusText}`);
            }
            
            const code = await response.text();
            
            // Cache the code
            this.codeCache[codeFile] = code;
            
            return code;
        } catch (error) {
            throw error;
        }
    },
    
    /**
     * Load and display a p5.js demo
     * @param {string} demoId - Unique ID for the demo container
     * @param {string} codeFile - Path to the code file
     * @param {HTMLElement} container - Container element for the demo
     */
    async loadDemo(demoId, codeFile, container) {
        // Show loading state
        const loadingEl = container.querySelector('.demo-loading');
        const errorEl = container.querySelector('.demo-error');
        const canvasContainer = container.querySelector('.demo-canvas-container');
        
        if (loadingEl) loadingEl.style.display = 'block';
        if (errorEl) errorEl.style.display = 'none';
        if (canvasContainer) canvasContainer.innerHTML = '';
        
        try {
            // Fetch the code
            const code = await this.fetchCode(codeFile);
            
            // Check if p5.js is loaded
            if (typeof p5 === 'undefined') {
                throw new Error('p5.js library is not loaded. Please ensure p5.js is included in the page.');
            }
            
            // Convert to instance mode if needed
            const instanceCode = this.convertToInstanceMode(code);
            
            // Create a unique container for this sketch
            const canvasId = `p5-canvas-${demoId}`;
            if (!canvasContainer) {
                throw new Error('Canvas container not found');
            }
            
            // Create canvas element
            const canvasEl = document.createElement('div');
            canvasEl.id = canvasId;
            canvasEl.className = 'p5-canvas';
            canvasEl.setAttribute('role', 'img');
            canvasEl.setAttribute('aria-label', `Interactive p5.js demonstration: ${codeFile.split('/').pop()}`);
            canvasEl.setAttribute('tabindex', '0');
            canvasEl.setAttribute('aria-live', 'polite');
            canvasContainer.appendChild(canvasEl);
            
            // Add description for screen readers
            const description = document.createElement('div');
            description.className = 'sr-only';
            description.id = `${canvasId}-description`;
            description.textContent = `Interactive code demonstration. This canvas displays the visual output of the p5.js code example.`;
            canvasContainer.appendChild(description);
            canvasEl.setAttribute('aria-describedby', `${canvasId}-description`);
            
            // Clean up any existing sketch with this ID
            if (this.activeSketches.has(demoId)) {
                const oldSketch = this.activeSketches.get(demoId);
                if (oldSketch && oldSketch.remove) {
                    oldSketch.remove();
                }
                this.activeSketches.delete(demoId);
            }
            
            // Execute the code in instance mode
            try {
                // Convert code to instance mode (returns a function)
                const sketchFunction = this.convertToInstanceMode(code);
                
                // Create new p5 instance
                const p5Instance = new p5(sketchFunction, canvasId);
                
                // Store for cleanup
                this.activeSketches.set(demoId, p5Instance);
                
                // Hide loading, show canvas
                if (loadingEl) loadingEl.style.display = 'none';
                if (errorEl) errorEl.style.display = 'none';
                
            } catch (execError) {
                throw new Error(`Failed to execute code: ${execError.message}`);
            }
            
        } catch (error) {
            // Show error message
            if (loadingEl) loadingEl.style.display = 'none';
            if (errorEl) {
                errorEl.style.display = 'block';
                errorEl.textContent = `Failed to load demo: ${error.message}`;
            }
        }
    },
    
    /**
     * Create a demo container element
     * @param {string} demoId - Unique ID for the demo
     * @param {string} codeFile - Path to the code file
     * @param {boolean} lazyLoad - Whether to lazy load the demo
     * @returns {HTMLElement} - The container element
     */
    createDemoContainer(demoId, codeFile, lazyLoad = true) {
        const container = document.createElement('div');
        container.id = demoId;
        container.className = 'code-example-demo';
        container.dataset.codeFile = codeFile;
        container.setAttribute('role', 'region');
        container.setAttribute('aria-label', 'Interactive code demonstration');
        
        // Loading state
        const loadingEl = document.createElement('div');
        loadingEl.className = 'demo-loading';
        loadingEl.setAttribute('role', 'status');
        loadingEl.setAttribute('aria-live', 'polite');
        loadingEl.innerHTML = '<p>Loading interactive demo...</p>';
        container.appendChild(loadingEl);
        
        // Error state
        const errorEl = document.createElement('div');
        errorEl.className = 'demo-error';
        errorEl.style.display = 'none';
        errorEl.setAttribute('role', 'alert');
        errorEl.setAttribute('aria-live', 'assertive');
        container.appendChild(errorEl);
        
        // Canvas container
        const canvasContainer = document.createElement('div');
        canvasContainer.className = 'demo-canvas-container';
        canvasContainer.setAttribute('role', 'region');
        canvasContainer.setAttribute('aria-label', 'Code demonstration canvas');
        container.appendChild(canvasContainer);
        
        // Load immediately or set up lazy loading
        if (lazyLoad && this.observer) {
            // Set up intersection observer for lazy loading
            this.observer.observe(container);
        } else {
            // Load immediately
            setTimeout(() => {
                this.loadDemo(demoId, codeFile, container);
            }, 100);
        }
        
        return container;
    },
    
    /**
     * Clean up a demo (remove sketch)
     * @param {string} demoId - ID of the demo to clean up
     */
    cleanupDemo(demoId) {
        if (this.activeSketches.has(demoId)) {
            const sketch = this.activeSketches.get(demoId);
            if (sketch && sketch.remove) {
                sketch.remove();
            }
            this.activeSketches.delete(demoId);
        }
        
        // Stop observing if using intersection observer
        if (this.observer) {
            const container = document.getElementById(demoId);
            if (container) {
                this.observer.unobserve(container);
            }
        }
    },
    
    /**
     * Clean up all demos
     */
    cleanupAll() {
        this.activeSketches.forEach((sketch, demoId) => {
            this.cleanupDemo(demoId);
        });
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        P5EmbedManager.init();
    });
} else {
    P5EmbedManager.init();
}

