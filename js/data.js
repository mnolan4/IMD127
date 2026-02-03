// Course Data Structure
// Contains all course information, weeks, tasks, and content references

const courseData = {
    title: "Introduction to Creative Coding for Artists",
    duration: "15 weeks",
    description: "Learn to create art through code using JavaScript and p5.js",
    
    weeks: [
        {
            id: "week-01",
            number: 1,
            title: "Introduction to Creative Coding",
            topics: ["Course overview", "What is code?", "p5.js setup", "Hello World variations", "Coordinate systems"],
            deliverables: ["Code tracing exercise", "Creative variation of Hello World using Points, lines, shapes, Text, fill, and background color"],
            learningOutcomes: "By the end of this week, you should be able to set up your development environment and create your first p5.js sketch. You should understand the basic structure of a p5.js program including setup and draw functions. You should use basic drawing functions to create shapes, text, and colors. You should navigate the coordinate system.",
            schedule: {
                weekStart: "2025-01-27",
                weekEnd: "2025-02-02",
                classDates: ["2025-01-27", "2025-01-29"],
                assignments: {
                    "homework-sketch-01": "2025-02-03T23:59:00"
                },
                assessments: {
                    "code-tracing-01": "2025-01-31T23:59:00"
                },
                activities: {
                    "2025-01-27": { type: "lecture", topics: ["Course overview", "What is code?", "p5.js setup", "Hello World variations"] },
                    "2025-01-29": { type: "lab", topics: ["Coordinate systems", "Basic shapes and colors", "Hands-on practice"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-01.html" },
                examples: [
                    { title: "Basic Shapes Example", file: "code-examples/week-01-hello-world/basic-shapes.js", description: "Review and understand this code example to be able to draw circles, rectangles, triangles, lines, and points using p5.js drawing functions. This example demonstrates the basic shape functions and their parameters, showing how shapes are drawn in order and can overlap.", embedDemo: true },
                    { title: "Basic Shapes Example (Simple)", file: "code-examples/week-01-hello-world/basic-shapes-simple.js", description: "Clean version without comments - shows just the essential code for drawing basic shapes.", embedDemo: true },
                    { title: "Using console.log()", file: "code-examples/week-01-hello-world/console-log.js", description: "Review and understand this code example to learn how to use console.log() for debugging and understanding your code. Learn how to open the browser console, log variable values, check if code is running, and use console.log() effectively throughout your coding journey.", embedDemo: false },
                    { title: "Using console.log() (Simple)", file: "code-examples/week-01-hello-world/console-log-simple.js", description: "Clean version without comments - shows just the essential code for using console.log() to debug and understand your code.", embedDemo: false },
                    { title: "Colors Example", file: "code-examples/week-01-hello-world/colors.js", description: "Review and understand this code example to be able to add color to your shapes using fill() and stroke(). Learn RGB color values (0-255), how to color shape interiors and outlines, and how to use noFill() for transparent shapes.", embedDemo: true },
                    { title: "Colors Example (Simple)", file: "code-examples/week-01-hello-world/colors-simple.js", description: "Clean version without comments - shows just the essential code for using colors.", embedDemo: true },
                    { title: "Coordinate System Example", file: "code-examples/week-01-hello-world/coordinate-system.js", description: "Review and understand this code example to be able to position shapes accurately on the canvas. Understand the p5.js coordinate system where (0,0) is at the top-left corner, how X increases to the right and Y increases downward, and how to use width and height variables to position elements.", embedDemo: true },
                    { title: "Coordinate System Example (Simple)", file: "code-examples/week-01-hello-world/coordinate-system-simple.js", description: "Clean version without comments - shows just the essential code for understanding the coordinate system.", embedDemo: true },
                    { title: "Text Example", file: "code-examples/week-01-hello-world/text-example.js", description: "Review and understand this code example to be able to display text on your canvas with different sizes, colors, and alignments. Learn textSize(), textAlign(), and how to combine text with stroke for outlined text effects.", embedDemo: true },
                    { title: "Text Example (Simple)", file: "code-examples/week-01-hello-world/text-example-simple.js", description: "Clean version without comments - shows just the essential code for displaying text.", embedDemo: true }
                ],
                assessments: [
                    { id: "code-tracing-01", title: "Code Tracing Exercise", type: "code-tracing", file: "pdfs/Assessments/Unproctored/Code-Tracing/code-tracing-week-01.pdf" }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-01", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-01.pdf",
                        prompt: "Create a simple self-portrait using only basic shapes (rectangles, circles, triangles, lines, points). Use at least 5 different shapes and 3 different colors. Include your name as text somewhere in the composition. Write all code from scratch using this week's examples and the p5.js reference. Consider: How does the arrangement of shapes and colors create a visual impression? What feeling does your composition convey to a viewer?"
                    }
                ],
                resources: [
                    { 
                        title: "Welcome Guide", 
                        file: "pdfs/Student-Resources/Getting-Started/Welcome.pdf",
                        content: `Welcome to Creative Coding!

Hey there! Welcome to Introduction to Creative Coding for Artists. I'm really excited you're here. This is going to be a fun journey into using code as a creative medium, think of it as learning a new way to make art, not just learning to program.

What This Course Is About

This is a 15-week course where you'll learn to create art through code using JavaScript and p5.js. The best part? You don't need any prior coding experience. Seriously. We're starting from the very beginning, and I've designed this course specifically for artists and designers who might be curious about code but haven't tried it yet.

If you do have some coding experience, that's great too! You'll be able to move faster and help others. There are extension opportunities and advanced challenges for you as well.

Our Philosophy

Here's how I think about this course:

Code is a creative medium. We're not just learning programming, we're learning a new way to express ourselves artistically.

Process over product. Learning and experimentation matter more than perfect final pieces. Your journey is what counts.

Experimentation and risk-taking are encouraged. Try weird things. Break stuff. See what happens.

There are multiple pathways to learning. Everyone learns differently, and that's okay. We'll support you wherever you're at.

This is an inclusive and supportive environment. We're all learning together, and there are no stupid questions.

Creative expression comes first. Technical skills serve your artistic goals, not the other way around.

What You'll Learn

Over 15 weeks, we'll cover:

• Drawing and shapes (the basics of making things appear on screen)
• Images and how to work with them
• Interaction (making things respond to mouse and keyboard)
• Loops (repeating patterns)
• Functions (organizing your code)
• Arrays (managing multiple things)
• Objects and classes (building more complex systems)
• Randomness and noise (creating organic, unpredictable patterns)
• Sound (making things that make noise!)
• UI basics (buttons, sliders, and interactive controls)
• Game design and interactivity (state machines, scoring, timers)
• Data visualization (turning data into art)
• Video input (working with your webcam)
• And finally, putting it all together in a portfolio

The Course Structure

Here's how our 15 weeks break down:

Weeks 1-2: Getting Started
We'll set up your tools, learn the basics of p5.js, and create your first sketches. You'll do a homework sketch each week to practice.

Week 3: Interaction & Your First Major Project
You'll learn how to make things interactive, and you'll create Major Project 1: Static Image, Visual Poetry. This will be printed and bound into a zine as a class keepsake!

Weeks 4-5: Building Blocks
Loops and functions—these are the building blocks that let you do more with less code. More homework sketches to practice.

Week 6: Arrays & Creative Challenge 2
Learn to manage collections of things, and create an Interactive Drawing Tool for Creative Challenge 2.

Week 7: Objects & Classes
Organize your code better and create reusable components. Another homework sketch.

Week 8: Randomness & Noise
Make things unpredictable and organic. Homework sketch time.

Week 9: Sound
Add audio to your sketches. Yes, you can make things that make noise! Homework sketch.

Week 10: UI Basics
Learn to create buttons, sliders, and other interactive controls. Homework sketch.

Week 11: Interactivity & Game Design
This is where it all comes together! You'll learn state machines, scoring systems, timers, and create either a simple game or an interactive visual system. This is Creative Challenge 3, and you can use AI for this one if you want (just document it).

Week 12: Data Visualization
Turn data into beautiful, meaningful visuals. Homework sketch.

Week 13: Video Input
Work with your webcam—no machine learning required, just the basics built into p5.js.

Week 14: Studio Work / Final Exam
Time to work on your final portfolio and prepare for the exam.

Week 15: Final Portfolio & Exhibition
Show off everything you've created!

Assignments

You'll have a few different types of assignments:

Homework Sketches (Weeks 1, 2, 4, 5, 7, 8, 9, 10, 12)
These are weekly practice assignments that help you build your coding skills. They're due Monday at 11:59 PM before Tuesday's class. The idea is to write code from scratch, use reference material (not AI), and really get comfortable with the basics. These sketches help reinforce that code's impact extends beyond the screen.

Major Projects
• Major Project 1: Static Image, Visual Poetry (Week 3) - Your first big creative project
• Creative Challenge 2: Interactive Drawing Tool (Week 6) - Build something interactive
• Creative Challenge 3: Interactive System or Game (Week 11) - This is the big one where everything comes together
• Final Portfolio Project (Week 15) - Showcase your best work

Assessments

You'll have various assessments throughout the course. They're numbered sequentially (Assessment #1, Assessment #2, etc.) so you can easily keep track.

These will be completed either online through ELMS/Canvas or in person as a proctored assessment, depending on the specific assessment.

Important: On assessments, you cannot use AI, copilot, or code completion tools (unless I specifically tell you otherwise). However, you CAN use this class website, class examples, and shared sketches. The goal is to see what you understand, not what AI can generate.

Assessment types include:
• Code tracing exercises (following code step-by-step)
• Code explanations (explaining what code does)
• Parsons problems (arranging code blocks in the right order)
• Practice problems
• Code writing tasks
• Live coding demonstrations

Midterm Exam (15% of grade)
The midterm exam occurs on March 2, 2025, in-class. It covers Weeks 1-5 concepts through custom functions. The exam is proctored in-class with additional time available via TA proctored sessions. It includes a balanced mix of familiar assessment types (code tracing, code explanation, Parsons problems, code writing) to complement the learning structure.

Final Exam (20% of grade)
The final exam occurs on Monday, May 11, 2025, from 10:30 a.m. - 12:30 p.m., in-class. It is comprehensive, covering all course concepts (Weeks 1-13). The exam is proctored in-class with additional time available via TA proctored sessions. It includes all assessment types, balanced to complement the learning structure.

About AI Tools

AI tools are integrated into this course. Some assignments will explicitly ask you to use AI in structured ways. Other projects give you the choice—you can use AI if you want, or you can work without it. The key is: always document when and how you use AI.

If you don't want to use AI tools, that's totally fine! Complete code examples and resources are available for all assignments. You can absolutely succeed without using AI.

Time Commitment

Here's what to expect:
• In-class time: 3 hours per week (Tuesdays and Thursdays)
• Out-of-class time: 1-6 hours per week for assignments and practice
• Total: 4-9 hours per week

The time you spend outside class will vary depending on the week and what assignments are due. Some weeks will be lighter, some heavier. That's normal!

Tools You'll Need

The good news: everything is free and web-based! You don't need to buy any software.

• p5.js web editor (https://editor.p5js.org/) - This is where you'll write most of your code
• OpenProcessing (https://openprocessing.org/) - For sharing your work and seeing what others create
• Private GitHub (optional) - If you want to use version control, but it's not required

That's it! Just a web browser and an internet connection. Any computer will work—Mac, Windows, or Linux.

Getting Help

You're not in this alone! Here's how to get help:

During class: Ask questions anytime. Seriously, anytime. If you're confused, someone else probably is too.

Office hours: Mondays and Wednesdays 3:30-5:30 PM, or by appointment. Come by with questions, to work on assignments, or just to chat about creative coding.

Email: mttnln@umd.edu - I'll respond within 24-48 hours. Don't hesitate to reach out!

Peer support: We have a TA, D. Suri, who can help. Also, work with classmates to study and learn together. Collaboration is encouraged!

Resources: Check out the guides and FAQs on the course website. There are also video tutorials available. The website has everything organized by week, with code examples, key concepts, and assignment prompts all integrated.

Important Dates

• First day of class: January 27, 2025 (Tuesday)
• Last day of classes: May 8, 2025 (Friday)
• Spring Break: March 15-22, 2025
• Reading Day: May 9, 2025
• Final Exams: May 11-18, 2025

We meet Tuesdays and Thursdays. Homework sketches are typically due Monday at 11:59 PM before Tuesday's class.

What You'll Create

By the end of this course, you'll have created:
• Interactive sketches that respond to user input
• Visual compositions using code
• Sound pieces that combine audio and visuals
• Data visualizations that make information beautiful
• Games or interactive systems
• Physical art objects (some assignments connect to physical outputs)
• A final portfolio showcasing your best work

The Course Website

This website is your hub for everything. Here's what you'll find:

• Week-by-week content organized clearly
• Code examples with live, interactive demos you can play with
• Key concepts for each week explained in detail
• Progress tracking so you can see how you're doing
• Assignment prompts integrated directly (no need to download PDFs)
• Resources with collapsible sections (setup guides, FAQs, troubleshooting)
• Challenges to practice your skills

Everything is designed to be easy to navigate and helpful. Bookmark it—you'll be using it a lot!

Next Steps

1. Set up your p5.js account
2. Set up OpenProcessing (check the OpenProcessing Setup Guide)
3. Read through Week 1's Key Concepts
4. Try out some of the code examples
5. Complete your first homework sketch (due Monday at 11:59 PM)
6. Come to class ready to experiment and ask questions!

Remember: Everyone starts somewhere. Every expert was once a beginner. Mistakes are part of learning. Process matters more than perfection. And most importantly—have fun with it!

I'm here to help you succeed. Don't hesitate to reach out if you have questions, concerns, or just want to talk about creative coding. Let's make some art with code!

See you in class,
Matt`
                    },
                    { 
                        title: "Study Tips and Learning Strategies", 
                        file: "pdfs/Student-Resources/Getting-Started/Study-Tips-and-Learning-Strategies.pdf",
                        content: `Effective Learning Strategies

Active Practice
Code every day, even if just for 15-30 minutes. Regular practice builds muscle memory and deepens understanding. Consistency is more important than long sessions.

What to practice:
• Start with small examples from class
• Modify examples to see what happens
• Experiment with parameters and values
• Build variations on class examples
• Create personal mini-projects

How to practice:
• Type code yourself—don't just copy and paste
• Comment code in your own words
• Explain what each line does
• Try breaking code intentionally to see errors
• Fix errors to build debugging skills

Incremental Learning
Start simple, then add complexity. Get a basic version working first, then add features one at a time.

Process:
1. Get the simplest version working
2. Test that it works correctly
3. Add one new feature
4. Test again
5. Repeat

Example: Instead of building a complex interactive sketch all at once:
• First: Draw a static circle
• Second: Make it follow the mouse
• Third: Add color changes
• Fourth: Add multiple circles
• Fifth: Add interaction

Understanding Over Memorization
Focus on understanding concepts, not memorizing syntax. You can always look up function names, but understanding how things work is essential.

How to build understanding:
• Read code line by line and explain what each does
• Trace through code execution mentally
• Predict what code will do before running it
• Modify code and observe changes
• Connect new concepts to previous ones

Learn from Errors
Errors are learning opportunities, not failures. Every error teaches you something about how code works.

When you get an error:
1. Read the error message carefully
2. Check the line number mentioned
3. Look up the error type in Common-Errors
4. Use debugging strategies to isolate the problem
5. Fix it and understand why it was wrong
6. Document the solution for future reference

Keep an error log: Write down errors you encounter and their solutions. This builds your debugging knowledge.

Time Management

Planning Your Time
Allocate time wisely:
• In-class: 3 hours per week (attendance required)
• Out-of-class: 3-6 hours per week for assignments and practice
• Total commitment: 6-9 hours per week

Break down assignments:
• Read assignment description (15 minutes)
• Plan your approach (30 minutes)
• Build basic version (1-2 hours)
• Add features incrementally (1-2 hours)
• Test and debug (30 minutes)
• Refine and polish (30 minutes)

Starting Early
Start assignments early to allow time for:
• Experimentation and exploration
• Debugging unexpected issues
• Getting help if needed
• Refining your work
• Handling technical problems

Avoid last-minute work: Coding takes time, especially when debugging. Rushing leads to frustration and lower quality work.

Regular Practice
Practice coding regularly, not just when assignments are due. Daily practice, even for 15 minutes, is more effective than long weekend sessions.

Practice ideas:
• Review Key-Concepts after each class
• Work through example code
• Try practice problems
• Build personal projects
• Experiment with new functions

Study Techniques

Review After Class
Review Key-Concepts within 24 hours of class while material is fresh. This reinforces learning and helps identify questions early.

Review process:
1. Read through Key-Concepts PDF
2. Try the code examples yourself
3. Modify examples to experiment
4. Write down questions
5. Connect to previous concepts

Active Reading
Read code actively, not passively. Don't just skim—understand what each part does.

Active reading strategies:
• Read code line by line
• Explain what each line does out loud or in writing
• Predict what the code will do
• Trace through execution step by step
• Identify patterns and structures

Note-Taking
Take effective notes during class and while studying.

What to note:
• Key concepts and terminology
• Function names and parameters
• Code patterns and structures
• Common errors and solutions
• Questions and answers
• Personal insights and connections

How to organize notes:
• Use a coding journal or digital document
• Organize by week or topic
• Include code examples
• Add your own comments explaining concepts
• Review notes regularly

Code Snippet Library
Build a personal code snippet library of useful patterns and solutions.

What to save:
• Useful function combinations
• Common patterns (loops, conditionals, arrays)
• Solutions to problems you've solved
• Code that does something interesting
• Templates for common tasks

How to organize:
• Create a folder for code snippets
• Name files descriptively
• Add comments explaining what each does
• Group by topic or function

Debugging Strategies

Systematic Approach
Follow a systematic debugging process rather than guessing randomly.

Debugging steps:
1. Read the error message carefully
2. Check the line number mentioned
3. Look at code around that line
4. Use console.log() to see what's happening
5. Check Common-Errors for similar issues
6. Test incrementally to isolate the problem
7. Fix and verify the solution

Using console.log()
Use console.log() liberally to understand what your code is doing.

What to log:
• Variable values
• Function execution (when functions run)
• Loop iterations
• Conditional branches (which path code takes)
• Calculations and results

Example:
let x = 200;
function draw() {
    console.log('x value:', x); // See the value
    x = x + 1;
    ellipse(x, 200, 50, 50);
}

Incremental Testing
Test code incrementally as you build, not just at the end.

Process:
• Write a small piece of code
• Test it immediately
• Verify it works
• Add the next piece
• Test again
• Repeat

This makes it easier to find where problems occur.

Working with Assignments

Understanding Requirements
Read assignment descriptions carefully before starting.

What to identify:
• What you need to create
• Required features or functions
• Constraints or limitations
• Evaluation criteria (check rubrics)
• Submission requirements

Ask questions if anything is unclear. It's better to ask early than to do work that doesn't meet requirements.

Planning Your Approach
Plan before coding. Think about the structure and approach.

Planning steps:
1. Break the assignment into smaller tasks
2. Identify what you know how to do
3. Identify what you need to learn
4. Decide on the order of implementation
5. Estimate time for each part

Building Incrementally
Build assignments incrementally, starting with the simplest working version.

Process:
1. Create a basic version that meets minimum requirements
2. Test that it works
3. Add one feature at a time
4. Test after each addition
5. Refine and polish at the end

Getting Feedback
Share work in progress to get feedback early.

Ways to get feedback:
• Present work in class
• Share on OpenProcessing
• Work with classmates
• Ask the instructor
• Get peer review

Use feedback to improve your work and understanding.

Collaboration and Help-Seeking

When to Ask for Help
Ask for help when:
• You've tried troubleshooting for 15-20 minutes without progress
• You don't understand a concept after reviewing materials
• You're stuck and don't know what to try next
• You need clarification on requirements
• You want to discuss approaches or ideas

Before asking:
• Check Troubleshooting guides
• Review relevant Key-Concepts
• Check FAQs
• Try the debugging process
• Have specific questions ready

How to Ask for Help
Be specific about what you need help with. Include:
• What you're trying to do
• What you've tried
• What's happening (or not happening)
• Error messages (if any)
• Relevant code snippets

Example good question:
"I'm trying to make a circle follow the mouse, but it's not moving. I've checked that mouseX and mouseY are in the ellipse() function, and I've added console.log() which shows the values are updating. The circle appears but stays in one place. Here's my code: [code snippet]"

Pair Programming
Work with classmates through pair programming.

Benefits:
• Learn from each other
• Catch errors more quickly
• Discuss approaches
• Build communication skills
• Make coding more social

How to pair program:
• One person codes while the other reviews
• Switch roles regularly
• Discuss decisions together
• Explain your thinking
• Ask questions freely

Staying Motivated

Set Realistic Goals
Set achievable goals for each study session or assignment.

Goal-setting tips:
• Break large tasks into small steps
• Focus on one thing at a time
• Celebrate small wins
• Track your progress
• Adjust goals as needed

Find Your Interest
Connect coding to your interests to stay motivated.

Ways to personalize:
• Create projects related to your interests
• Experiment with different creative applications
• Explore topics that excite you
• Build a portfolio of work you're proud of
• Share work that represents you

Embrace the Process
Focus on learning, not perfection. Remember:
• Everyone learns at different paces
• Mistakes are part of learning
• Process matters more than product
• Progress is more important than perfection
• Every expert was once a beginner

Take Breaks
Take breaks when frustrated or stuck.

When to take a break:
• After 20-30 minutes of debugging without progress
• When feeling frustrated or overwhelmed
• When you can't think clearly
• When you're making the same mistakes repeatedly

What to do during breaks:
• Step away from the computer
• Do something physical
• Talk to someone
• Get fresh air
• Return with a fresh perspective

Building Long-Term Skills

Develop Good Habits
Build coding habits that will serve you long-term.

Good habits:
• Comment your code
• Use clear variable names
• Organize code logically
• Test incrementally
• Save work regularly
• Document your process

Build a Portfolio
Document your work throughout the course.

What to save:
• All your sketches and projects
• Screenshots of interesting results
• Notes about what you learned
• Challenges you overcame
• Code you're proud of

Why it matters:
• Shows your progress
• Useful for final portfolio
• Demonstrates skills to others
• Helps you reflect on learning

Continue Learning
Keep learning beyond the course.

Ways to continue:
• Explore the p5.js reference
• Try new libraries and tools
• Look at other creative coding projects
• Join creative coding communities
• Build personal projects
• Teach others what you've learned

Resources for Different Learning Styles

Visual Learners
Strategies:
• Study code examples with visual output
• Draw diagrams of how code flows
• Use color coding in your code editor
• Watch code execute step by step
• Create visual notes and mind maps
• Use the p5.js reference with visual examples

Hands-On Learners
Strategies:
• Type code yourself (don't just copy)
• Modify examples immediately
• Build projects from scratch
• Experiment with parameters
• Practice with physical outputs
• Try different approaches to see what works

Reading/Writing Learners
Strategies:
• Read documentation thoroughly
• Write comments explaining code
• Keep a coding journal
• Read the p5.js reference
• Write explanations of concepts
• Take detailed notes

Social Learners
Strategies:
• Participate in pair programming
• Work on group projects
• Discuss code with classmates
• Present your work
• Teach concepts to others
• Join study groups

Common Challenges and Solutions

"I don't understand how this works"
Solution: Break it down into smaller parts. Read code line by line. Look up functions in the p5.js reference. Try modifying one thing at a time. Ask for help—understanding is more important than speed.

"My code doesn't work and I don't know why"
Solution: Follow the debugging process from Troubleshooting guides. Read error messages carefully. Use console.log() to see what's happening. Check Common-Errors for similar issues. Ask for help with the error message and relevant code.

"I'm falling behind"
Solution: Communicate with the instructor early. Focus on understanding core concepts. Don't try to catch up by skipping ahead. Use office hours for extra help. Work with classmates. Remember: process over product.

"I'm not creative enough"
Solution: Creativity comes from experimentation. Start with simple ideas. Modify existing examples. Look at other students' work for inspiration. Focus on learning, not perfection. Every sketch teaches you something.

"I'm overwhelmed"
Solution: Break tasks into smaller steps. Focus on one concept at a time. Take breaks when frustrated. Ask for help early. Remember that everyone learns at different paces. Be patient with yourself.

Final Tips

Be Patient
Learning to code takes time. Be patient with yourself and the process. Progress may feel slow, but you are learning valuable skills.

Practice Regularly
Consistency beats intensity. Regular practice, even in small amounts, is more effective than occasional long sessions.

Ask Questions
There are no stupid questions. Asking questions helps you learn and helps others too. Use all available resources: instructor, classmates, FAQs, Troubleshooting guides.

Have Fun
Enjoy the creative process. Experiment, play, and explore. Creative coding is meant to be fun. Let your curiosity guide you.

Remember Your Goals
Keep in mind why you're learning creative coding. Connect technical skills to your creative goals. See how concepts build on each other. Appreciate your progress over time.

Resources
• Key-Concepts - Week-by-week concept summaries
• Troubleshooting guides - Solutions to common problems
• FAQs - Answers to frequently asked questions
• Setup-Guides - Tool setup instructions
• Code-Library - Example code and templates
• p5.js Reference - https://p5js.org/reference/
• p5.js Examples - https://p5js.org/examples/

Remember: These strategies are tools to help you learn. Find what works for you and adapt as needed. You've got this!`
                    }
                ]
            }
        },
        {
            id: "week-02",
            number: 2,
            title: "Drawing with Code",
            topics: ["Shapes, colors, drawing functions", "Variables", "Basic animation", "The draw loop"],
            deliverables: ["Parsons problem", "Code explanation exercise"],
            learningOutcomes: "By the end of this week, you should be able to create static visual compositions using shapes, colors, and drawing functions. You should use variables to store and manipulate position and color values. You should create simple animations using frameCount. You should understand how code executes over time through the draw loop.",
            schedule: {
                weekStart: "2025-02-03",
                weekEnd: "2025-02-09",
                classDates: ["2025-02-03", "2025-02-05"],
                assignments: {
                    "homework-sketch-02": "2025-02-10T23:59:00"
                },
                assessments: {
                    "parsons-02": "2025-02-07T23:59:00",
                    "code-explanation-02": "2025-02-07T23:59:00",
                    "practice-02": "2025-02-07T23:59:00"
                },
                activities: {
                    "2025-02-03": { type: "lecture", topics: ["Shapes, colors, drawing functions", "Variables", "Basic animation"] },
                    "2025-02-05": { type: "lab", topics: ["The draw loop", "Hands-on animation practice", "Image loading"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-02.html" },
                examples: [
                    { title: "Variables for Position", file: "code-examples/week-02-drawing/variables-position.js", type: "code", description: "Review and understand this code example to be able to use variables to store position values instead of hard-coding numbers. This makes code more flexible, readable, and easier to modify. See how variables can be used multiple times and changed easily." },
                    { title: "Variables for Position (Simple)", file: "code-examples/week-02-drawing/variables-position-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for using position variables." },
                    { title: "Variables for Color", file: "code-examples/week-02-drawing/variables-color.js", type: "code", description: "Review and understand this code example to be able to store RGB color components in variables and easily experiment with colors. Learn how color variables make it simple to change colors throughout your code and prepare for color animations." },
                    { title: "Variables for Color (Simple)", file: "code-examples/week-02-drawing/variables-color-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for using color variables." },
                    { title: "Basic Math", file: "code-examples/week-02-drawing/basic-math.js", type: "code", description: "Review and understand this code example to see basic math in JavaScript (addition, subtraction, multiplication, division, modulo, order of operations) and how to print results with console.log() in setup()." },
                    { title: "Basic Math (Simple)", file: "code-examples/week-02-drawing/basic-math-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for basic math and console.log." },
                    { title: "Basic Animation", file: "code-examples/week-02-drawing/animation-basic.js", type: "code", description: "Review and understand this code example to be able to create your first animation using frameCount and the modulo operator. Learn how animation works by drawing something slightly different each frame, and how to use modulo to create looping movement.", embedDemo: true },
                    { title: "Basic Animation (Simple)", file: "code-examples/week-02-drawing/animation-basic-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for basic animation.", embedDemo: true },
                    { title: "Pulsing Animation", file: "code-examples/week-02-drawing/animation-pulse.js", type: "code", description: "Review and understand this code example to be able to create smooth, organic pulsing animations using the sin() function. Learn how sine waves create natural-feeling oscillations perfect for breathing effects, size changes, and gentle movement." },
                    { title: "Pulsing Animation (Simple)", file: "code-examples/week-02-drawing/animation-pulse-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for pulsing animation." },
                    { title: "Color Changing Animation", file: "code-examples/week-02-drawing/animation-color-change.js", type: "code", description: "Review and understand this code example to be able to animate colors by cycling through RGB values using modulo. See how different cycling speeds for each color component create complex, rainbow-like color transitions." },
                    { title: "Color Changing Animation (Simple)", file: "code-examples/week-02-drawing/animation-color-change-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for color-changing animation." },
                    { title: "Loading Images", file: "code-examples/week-02-drawing/load-image.js", type: "code", description: "Review and understand this code example to be able to load and display image files in your p5.js sketches. Learn how to use preload() to load images, declare image variables, and display images using the image() function. This enables you to incorporate photographs, illustrations, or any image files into your creative coding projects." },
                    { title: "Loading Images (Simple)", file: "code-examples/week-02-drawing/load-image-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for loading and displaying images." }
                ],
                assessments: [
                    { id: "parsons-02", title: "Parsons Problem", type: "parsons", file: "pdfs/Assessments/Unproctored/Parsons-Problems/parsons-problem-week-02.pdf" },
                    { id: "code-explanation-02", title: "Code Explanation Exercise", type: "code-explanation", file: "pdfs/Assessments/Unproctored/Code-Explanation/code-explanation-week-02.pdf" },
                    { id: "practice-02", title: "Practice Problems", type: "practice", file: "pdfs/Assessments/Unproctored/Practice-Problems/practice-problem-week-02.pdf" }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-02", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-02.pdf",
                        prompt: "Create a simple animated scene with at least one moving element. Use variables to store position values (like `let x = 100;`). Make something move smoothly across the screen using `frameCount` or the modulo operator. Write all code from scratch using this week's animation examples. Consider: How does the movement create a sense of life or energy? What does the motion communicate to someone watching?"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-03",
            number: 3,
            title: "Interaction and Motion",
            topics: ["mouseX/mouseY, mousePressed(), keyPressed()", "Conditional statements", "Event-driven programming"],
            deliverables: ["Pair programming challenge", "Code writing task", "Major Project 1: Static Image, Visual Poetry"],
            learningOutcomes: "By the end of this week, you should be able to use mouse and keyboard input to create interactive experiences. You should write conditional statements to make decisions in code. You should understand event-driven programming. You should create interactive drawing tools and applications.",
            schedule: {
                weekStart: "2025-02-10",
                weekEnd: "2025-02-16",
                classDates: ["2025-02-10", "2025-02-12"],
                assignments: {
                    "homework-sketch-03": "2025-02-17T23:59:00",
                    "major-project-01": "2025-02-23T23:59:00"
                },
                assessments: {
                    "code-tracing-03": "2025-02-14T23:59:00",
                    "code-writing-03": "2025-02-14T23:59:00"
                },
                activities: {
                    "2025-02-10": { type: "lecture", topics: ["mouseX/mouseY, mousePressed(), keyPressed()", "Conditional statements", "Event-driven programming"] },
                    "2025-02-12": { type: "lab", topics: ["Interactive examples", "Pair programming challenge", "Major Project 1 introduction"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-03.html" },
                examples: [
                    { title: "Mouse Following", file: "code-examples/week-03-interaction/mouse-following.js", type: "code", description: "Review and understand this code example to be able to make shapes follow your mouse cursor using mouseX and mouseY. Learn how these built-in variables automatically track mouse position and update every frame, enabling interactive experiences.", embedDemo: true },
                    { title: "Mouse Pressed", file: "code-examples/week-03-interaction/mouse-pressed.js", type: "code", description: "Review and understand this code example to be able to respond to mouse clicks using the mousePressed() function. Learn how p5.js automatically calls this function when the mouse button is pressed, and how to use random() to create varied interactions.", embedDemo: true },
                    { title: "Drawing Tool", file: "code-examples/week-03-interaction/drawing-tool.js", type: "code", description: "Review and understand this code example to be able to create a simple drawing tool that leaves a trail by not clearing the background. Understand the difference between calling background() in setup() vs draw(), and how this creates persistent drawings.", embedDemo: true },
                    { title: "Conditional Color", file: "code-examples/week-03-interaction/conditional-color.js", type: "code", description: "Review and understand this code example to be able to use if/else statements to change behavior based on conditions. Learn how to make decisions in code, such as changing color based on mouse position, creating responsive and interactive visuals.", embedDemo: true },
                    { title: "Keyboard Control", file: "code-examples/week-03-interaction/keyboard-control.js", type: "code", description: "Review and understand this code example to be able to control object movement with keyboard keys using keyPressed(). Learn how to check which key was pressed, move objects with WASD keys, and use constrain() to keep objects on the canvas.", embedDemo: true }
                ],
                assessments: [
                    { id: "code-tracing-03", title: "Code Tracing Exercise", type: "code-tracing", file: "pdfs/Assessments/Unproctored/Code-Tracing/code-tracing-week-03.pdf" },
                    { id: "code-writing-03", title: "Code Writing Task #1", type: "code-writing", file: "pdfs/Assessments/Unproctored/Code-Writing/code-writing-week-03.pdf" }
                ],
                assignments: [
                    { 
                        id: "major-project-01", 
                        title: "Major Project 1: Static Image, Visual Poetry", 
                        type: "major-project", 
                        file: "pdfs/Assignments/Major-Projects/Major-Project-01.pdf",
                        prompt: "Create your own visual poetry sketch in openprocessing using the setup() static draw OR a generative system that you render a still image from. We will then print, perfect bind and have zine as a keepsake for the class.\n\nYou can create image and/or text, but we encourage you to experiment with visual poetry—exploring how words, shapes, colors, and composition can create meaning beyond literal text. Think about how code can generate poetic visual experiences. We would love to see visual poetry experiments that explore the relationship between text and image, form and meaning, code and expression.\n\nCanvas Size Recommendations:\n• High-quality screen / decent print: 150 DPI → 1275 × 1650 px (sweet spot if exporting images)\n• Print-ready: 300 DPI → 2550 × 3300 px (standard for professional printing, but heavy for beginners)\n• Recommendation: Start with 816 × 1056 px (96 DPI) - maps cleanly to inches, feels \"page-like,\" and keeps performance friendly\n\nExport Methods:\n• Key command to export an image\n• Screenshot of the preview window\n• Right-click to print frame\n• File print → PDF (for whole page)"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-04",
            number: 4,
            title: "Loops and Patterns",
            topics: ["For loops", "Nested loops", "Basic randomness", "Pattern generation", "Modulo operator"],
            deliverables: ["Code tracing (nested loops)", "Creative pattern challenge"],
            learningOutcomes: "By the end of this week, you should be able to use for loops to repeat code. You should create nested loops for 2D patterns. You should use random() in loops to create variation (random positions, sizes). You should generate patterns using loops. You should use the modulo operator for pattern variations.",
            schedule: {
                weekStart: "2025-02-17",
                weekEnd: "2025-02-23",
                classDates: ["2025-02-17", "2025-02-19"],
                assignments: {
                    "homework-sketch-04": "2025-02-24T23:59:00"
                },
                assessments: {
                    "code-tracing-04": "2025-02-21T23:59:00",
                    "practice-04": "2025-02-21T23:59:00"
                },
                activities: {
                    "2025-02-17": { type: "lecture", topics: ["For loops", "Nested loops", "Pattern generation"] },
                    "2025-02-19": { type: "lab", topics: ["Modulo operator", "Creative pattern challenge", "Code review"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-04.html" },
                examples: [
                    { title: "Basic Loop", file: "code-examples/week-04-loops/basic-loop.js", type: "code", description: "Review and understand this code example to be able to use for loops to repeat code multiple times without writing it over and over. Learn loop syntax, how to use the loop variable for calculations, and how loops make patterns and repetitions easy." },
                    { title: "Nested Loops", file: "code-examples/week-04-loops/nested-loops.js", type: "code", description: "Review and understand this code example to be able to create two-dimensional patterns like grids using loops inside loops. Understand how the outer loop handles rows and the inner loop handles columns, perfect for creating organized visual patterns.", embedDemo: true },
                    { title: "Modulo Pattern", file: "code-examples/week-04-loops/modulo-pattern.js", type: "code", description: "Review and understand this code example to be able to use the modulo operator (%) to create repeating patterns and cycles. Learn how modulo returns remainders, how to check for even/odd numbers, and how to create alternating color patterns." },
                    { title: "Random Loop", file: "code-examples/week-04-loops/random-loop.js", type: "code", description: "Review and understand this code example to combine a loop with random() to draw many shapes at random positions and sizes. Learn basic random() syntax and how loops plus randomness create variation.", embedDemo: true },
                    { title: "Random Loop (Simple)", file: "code-examples/week-04-loops/random-loop-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for a loop with random positions and sizes." }
                ],
                assessments: [
                    { id: "code-tracing-04", title: "Code Tracing (Nested Loops)", type: "code-tracing", file: "pdfs/Assessments/Unproctored/Code-Tracing/code-tracing-week-04.pdf" },
                    { id: "practice-04", title: "Practice Problems", type: "practice", file: "pdfs/Assessments/Unproctored/Practice-Problems/practice-problem-week-04.pdf" }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-04", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-04.pdf",
                        prompt: "Create a repeating pattern using a for loop. Draw at least 10 identical or similar shapes arranged in a row, column, or grid. Use nested loops to create a 2D pattern (like a checkerboard or dot grid). Write all code from scratch using this week's loop examples. Consider: How does repetition create visual rhythm? What does the pattern suggest to a viewer - order, chaos, texture, or something else?"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-05",
            number: 5,
            title: "Functions and Modularity",
            topics: ["Function definition", "Parameters", "Return values", "Code organization"],
            deliverables: ["Code explanation (function analysis)", "Parsons problem"],
            learningOutcomes: "By the end of this week, you should be able to define your own functions. You should use parameters to make functions flexible. You should return values from functions. You should organize code into reusable modules.",
            schedule: {
                weekStart: "2025-02-24",
                weekEnd: "2025-03-02",
                classDates: ["2025-02-24", "2025-02-26"],
                assignments: {
                    "homework-sketch-05": "2025-03-03T23:59:00"
                },
                assessments: {
                    "code-explanation-05": "2025-02-28T23:59:00",
                    "parsons-05": "2025-02-28T23:59:00",
                    "midterm-exam": "2025-03-02T12:00:00"
                },
                activities: {
                    "2025-02-24": { type: "lecture", topics: ["Function definition", "Parameters", "Return values"] },
                    "2025-02-26": { type: "lab", topics: ["Code organization", "Modular pattern systems", "Function practice"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-05.html" },
                examples: [
                    { title: "Custom Function", file: "code-examples/week-05-functions/custom-function.js", type: "code", description: "Review and understand this code example to be able to create your own reusable functions to organize code into clean, modular blocks. Learn function syntax, how to define functions, and how calling functions makes code cleaner and easier to maintain." },
                    { title: "Function Parameters", file: "code-examples/week-05-functions/function-parameters.js", type: "code", description: "Review and understand this code example to be able to use parameters to make functions flexible and create variations. Learn how to pass values into functions, how parameters work, and how the same function can create different results with different inputs." }
                ],
                assessments: [
                    { id: "code-explanation-05", title: "Code Explanation (Function Analysis)", type: "code-explanation", file: "pdfs/Assessments/Unproctored/Code-Explanation/code-explanation-week-05.pdf" },
                    { id: "parsons-05", title: "Parsons Problem", type: "parsons", file: "pdfs/Assessments/Unproctored/Parsons-Problems/parsons-problem-week-05.pdf" },
                    { id: "midterm-exam", title: "Midterm Exam", type: "midterm", file: null }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-05", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-05.pdf",
                        prompt: "Create a custom function that draws a simple shape or pattern. Use parameters to make your function flexible (like `drawStar(x, y, size)`). Call your function at least 3 times with different parameters to create variations. Write all code from scratch using this week's function examples. Consider: How does organizing code into functions change how you think about creating? What story do the variations of your function tell?"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-06",
            number: 6,
            title: "Arrays and Collections",
            topics: ["Array basics", "Array methods", "Particle systems", "Managing multiple objects"],
            deliverables: ["Code writing task", "Pair programming challenge"],
            learningOutcomes: "By the end of this week, you should be able to create and use arrays to store multiple values. You should use array methods to manipulate data. You should create particle systems. You should manage multiple objects efficiently.",
            schedule: {
                weekStart: "2025-03-03",
                weekEnd: "2025-03-09",
                classDates: ["2025-03-03", "2025-03-05"],
                assignments: {
                    "homework-sketch-06": "2025-03-10T23:59:00",
                    "creative-challenge-02": "2025-03-16T23:59:00"
                },
                assessments: {
                    "code-writing-06": "2025-03-07T23:59:00",
                    "practice-06": "2025-03-07T23:59:00"
                },
                activities: {
                    "2025-03-03": { type: "lecture", topics: ["Array basics", "Array methods", "Particle systems"] },
                    "2025-03-05": { type: "lab", topics: ["Managing multiple objects", "Pair programming challenge", "Creative Challenge 2 introduction"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-06.html" },
                examples: [
                    { title: "Basic Array", file: "code-examples/week-06-arrays/basic-array.js", type: "code", description: "Review and understand this code example to be able to store multiple values in a single array variable. Learn array syntax, how arrays are indexed starting at 0, how to access elements, and how to loop through arrays to work with collections of data." },
                    { title: "Particle System", file: "code-examples/week-06-arrays/particle-system.js", type: "code", description: "Review and understand this code example to be able to manage multiple objects using arrays to create particle systems. Learn how to add particles dynamically, update and draw all particles in a loop, and create complex visual effects with many moving objects.", embedDemo: true },
                    { title: "Array of Colors", file: "code-examples/week-06-arrays/array-of-colors.js", type: "code", description: "Review and understand this code example to store color names or hex strings in an array (a palette) and use random(palette) to pick a random color. Generative artists often use this pattern to keep results coherent while still varied.", embedDemo: true },
                    { title: "Array of Colors (Simple)", file: "code-examples/week-06-arrays/array-of-colors-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for a color palette and random(array)." }
                ],
                assessments: [
                    { id: "code-writing-06", title: "Code Writing Task #2", type: "code-writing", file: "pdfs/Assessments/Unproctored/Code-Writing/code-writing-week-06.pdf" },
                    { id: "practice-06", title: "Practice Problems", type: "practice", file: "pdfs/Assessments/Unproctored/Practice-Problems/practice-problem-week-06.pdf" }
                ],
                assignments: [
                    { 
                        id: "creative-challenge-02", 
                        title: "Creative Challenge 2: Interactive Drawing Tool", 
                        type: "creative-challenge", 
                        file: "pdfs/Assignments/Creative-Challenges/Creative-Challenge-02.pdf",
                        prompt: "Create an interactive drawing tool that allows users to create visual marks through mouse or keyboard interaction. This project should demonstrate your understanding of arrays, mouse/keyboard input, and event-driven programming.\n\nRequirements:\n• Use arrays to store drawing data (positions, colors, sizes)\n• Implement mouse interaction (mousePressed, mouseDragged, or mouseIsPressed)\n• Allow users to create persistent marks on the canvas\n• Include at least one interactive feature (color change, brush size, clear function, etc.)\n• Use keyboard input for controls (change modes, clear canvas, save, etc.)\n\nConsider:\n• How does the tool feel to use? Is it responsive and intuitive?\n• What creative possibilities does your tool enable?\n• How do arrays help manage multiple drawing elements?\n• What makes your drawing tool unique or interesting?\n\nTechnical Focus:\n• Arrays for storing drawing data\n• Mouse and keyboard event functions\n• Array methods (push, forEach, etc.)\n• Conditional statements for different drawing modes\n• Event-driven programming patterns"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-07",
            number: 7,
            title: "Objects and Classes",
            topics: ["Object-oriented programming basics", "Classes and instances", "Object interactions"],
            deliverables: ["Code tracing (object interactions)", "Creative challenge (object-based system)"],
            learningOutcomes: "By the end of this week, you should be able to understand object-oriented programming basics. You should create classes to define object templates. You should instantiate multiple objects from a class. You should write methods that define object behaviors. You should design object-based systems with interactions.",
            schedule: {
                weekStart: "2025-03-10",
                weekEnd: "2025-03-16",
                classDates: ["2025-03-10", "2025-03-12"],
                assignments: {
                    "homework-sketch-07": "2025-03-24T23:59:00"
                },
                assessments: {
                    "code-tracing-07": "2025-03-14T23:59:00"
                },
                activities: {
                    "2025-03-10": { type: "lecture", topics: ["Object-oriented programming basics", "Classes and instances"] },
                    "2025-03-12": { type: "lab", topics: ["Object interactions", "Creative challenge", "Spring Break preparation"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-07.html" },
                examples: [
                    { title: "Basic Object", file: "code-examples/week-07-objects/basic-object.js", type: "code", description: "Review and understand this code example to be able to group related properties together using objects. Learn object syntax, how to access properties with dot notation, and how objects organize code better than separate variables." },
                    { title: "Class Example", file: "code-examples/week-07-objects/class-example.js", type: "code", description: "Review and understand this code example to be able to create classes as templates for objects and instantiate multiple instances. Learn class syntax, constructors, methods, the 'this' keyword, and how to create many similar objects with different properties." }
                ],
                assessments: [
                    { id: "code-tracing-07", title: "Code Tracing (Object Interactions)", type: "code-tracing", file: "pdfs/Assessments/Unproctored/Code-Tracing/code-tracing-week-07.pdf" }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-07", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-07.pdf",
                        prompt: "Create a simple class (like `Ball` or `Flower`) with at least 3 properties (like position, size, color). Create at least 3 instances of your class and display them on screen. Write all code from scratch using this week's class examples. Consider: How does creating multiple instances create a sense of community or system? What relationship do the objects have with each other and the viewer?"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-08",
            number: 8,
            title: "Randomness and Noise",
            topics: ["random()", "noise()", "Perlin noise", "Probability", "Organic forms"],
            deliverables: ["Code explanation (randomness algorithms)", "Parsons problem"],
            learningOutcomes: "By the end of this week, you should be able to use random to create variation. You should use noise for smooth, organic randomness. You should understand Perlin noise. You should apply probability concepts. You should create organic, natural-looking forms.",
            schedule: {
                weekStart: "2025-03-17",
                weekEnd: "2025-03-23",
                classDates: ["2025-03-24", "2025-03-26"],
                assignments: {
                    "homework-sketch-08": "2025-03-31T23:59:00"
                },
                assessments: {
                    "code-explanation-08": "2025-03-28T23:59:00",
                    "parsons-08": "2025-03-28T23:59:00"
                },
                activities: {
                    "2025-03-24": { type: "lecture", topics: ["random()", "noise()", "Perlin noise", "Probability"] },
                    "2025-03-26": { type: "lab", topics: ["Organic forms", "Random walk patterns", "Hands-on practice"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-08.html" },
                examples: [
                    { title: "Random Basic", file: "code-examples/week-08-randomness/random-basic.js", type: "code", description: "Review and understand this code example to be able to generate random numbers using random() to add unpredictability and variation. Learn random() syntax, how to create random positions and sizes, and how randomness creates organic, varied results." },
                    { title: "Random Walk", file: "code-examples/week-08-randomness/random-walk.js", type: "code", description: "Review and understand this code example to be able to create organic, meandering paths with step-by-step random movement. Learn the random walk algorithm, how small random steps build up into natural-looking trails, and how to keep objects on canvas.", embedDemo: true },
                    { title: "Noise Example", file: "code-examples/week-08-randomness/noise-example.js", type: "code", description: "Review and understand this code example to be able to use Perlin noise for smooth, organic randomness instead of jumpy random() values. Learn how noise() creates gradual, continuous changes perfect for natural movement, clouds, terrain, and organic forms." }
                ],
                assessments: [
                    { id: "code-explanation-08", title: "Code Explanation (Randomness Algorithms)", type: "code-explanation", file: "pdfs/Assessments/Unproctored/Code-Explanation/code-explanation-week-08.pdf" },
                    { id: "parsons-08", title: "Parsons Problem", type: "parsons", file: "pdfs/Assessments/Unproctored/Parsons-Problems/parsons-problem-week-08.pdf" }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-08", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-08.pdf",
                        prompt: "Use `random()` to create an organic, natural-looking composition. Draw at least 5 elements with random positions, sizes, or colors. Optionally, use `noise()` for smoother randomness. Write all code from scratch using this week's randomness examples. Consider: How does randomness create a sense of nature or unpredictability? What does the organic quality communicate to a viewer?"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-09",
            number: 9,
            title: "Sound Basics",
            topics: ["p5.sound library", "Sound synthesis", "Sound analysis", "Audio playback"],
            deliverables: ["Code writing task (sound synthesis)", "Creative challenge (sound + visuals)"],
            learningOutcomes: "By the end of this week, you should be able to load and play audio files. You should use the p5.sound library. You should create sound-reactive visuals. You should synthesize simple sounds. You should analyze audio for visualization.",
            schedule: {
                weekStart: "2025-03-24",
                weekEnd: "2025-03-30",
                classDates: ["2025-03-31", "2025-04-02"],
                assignments: {
                    "homework-sketch-09": "2025-04-07T23:59:00"
                },
                assessments: {
                    "code-writing-09": "2025-04-04T23:59:00",
                    "practice-09": "2025-04-04T23:59:00"
                },
                activities: {
                    "2025-03-31": { type: "lecture", topics: ["p5.sound library", "Sound synthesis", "Sound analysis"] },
                    "2025-04-02": { type: "lab", topics: ["Audio playback", "Sound-reactive visuals", "Creative challenge"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-09.html" },
                examples: [
                    { title: "Sound Basic", file: "code-examples/week-09-sound/sound-basic.js", type: "code", description: "Review and understand this code example to be able to create and manipulate sound using the p5.sound library. Learn how to use oscillators to generate tones, control frequency (pitch) with mouse position, and create interactive sound experiences that connect audio and visuals." }
                ],
                assessments: [
                    { id: "code-writing-09", title: "Code Writing Task #3", type: "code-writing", file: "pdfs/Assessments/Unproctored/Code-Writing/code-writing-week-09.pdf" },
                    { id: "practice-09", title: "Practice Problems", type: "practice", file: "pdfs/Assessments/Unproctored/Practice-Problems/practice-problem-week-09.pdf" }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-09", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-09.pdf",
                        prompt: "Create a simple sound-reactive visual. Use an oscillator to generate a tone, and make a visual element (like a circle size or color) respond to the sound. Write all code from scratch using this week's sound examples. Consider: How does connecting sound and visuals create a richer experience? What does the combination of audio and visual communicate to someone experiencing your sketch?"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-10",
            number: 10,
            title: "UI Basics",
            topics: ["UI controls (sliders, buttons, knobs, switches)", "Controlling sound synthesis", "Controlling visual systems", "Audio input and video manipulation"],
            deliverables: ["Code explanation (UI integration)", "Creative challenge (UI-controlled system)"],
            learningOutcomes: "By the end of this week, you should be able to create interactive UI controls in p5.js. You should use sliders, buttons, checkboxes, and select menus to control sound synthesis and visual systems. You should capture audio input from a microphone and use it to manipulate video properties. You should build UI-controlled interactive systems.",
            schedule: {
                weekStart: "2025-03-31",
                weekEnd: "2025-04-06",
                classDates: ["2025-04-07", "2025-04-09"],
                assignments: {
                    "homework-sketch-10": "2025-04-14T23:59:00"
                },
                assessments: {
                    "code-explanation-10": "2025-04-11T23:59:00"
                },
                activities: {
                    "2025-04-07": { type: "lecture", topics: ["UI controls (sliders, buttons, knobs, switches)", "Controlling sound synthesis", "Controlling visual systems"] },
                    "2025-04-09": { type: "lab", topics: ["Audio input and video manipulation", "UI-controlled systems", "Hands-on practice"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-10.html" },
                examples: [
                    { title: "UI Controls Basic", file: "code-examples/week-10-ml-intro/ui-controls-basic.js", type: "code", description: "Review and understand this code example to be able to create interactive UI controls in p5.js. Learn how to use createSlider(), createButton(), and createCheckbox() to build user interfaces. Understand how to read values from controls and connect them to your creative coding projects." },
                    { title: "UI Controls Basic (Simple)", file: "code-examples/week-10-ml-intro/ui-controls-basic-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for creating UI controls." },
                    { title: "UI Synth Control", file: "code-examples/week-10-ml-intro/ui-synth-control.js", type: "code", description: "Review and understand this code example to be able to use UI controls to manipulate sound synthesis. Learn how sliders can control oscillator frequency and amplitude, how buttons can start/stop sounds, and how checkboxes can toggle effects. This builds on Week 9's sound synthesis lessons." },
                    { title: "UI Synth Control (Simple)", file: "code-examples/week-10-ml-intro/ui-synth-control-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for controlling a synthesizer with UI." },
                    { title: "UI Visual Control", file: "code-examples/week-10-ml-intro/ui-visual-control.js", type: "code", description: "Review and understand this code example to be able to use UI controls to manipulate visual systems. Learn how sliders can control colors, shapes, and animations. See how buttons can change modes and checkboxes can toggle visual effects." },
                    { title: "UI Visual Control (Simple)", file: "code-examples/week-10-ml-intro/ui-visual-control-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for controlling visuals with UI." },
                    { title: "Audio Input Video", file: "code-examples/week-10-ml-intro/audio-input-video.js", type: "code", description: "Review and understand this code example to be able to use audio input (microphone) to control video properties. Learn how to capture audio input, measure volume levels, and map those levels to video brightness, contrast, and saturation. This creates reactive video that responds to sound." },
                    { title: "Audio Input Video (Simple)", file: "code-examples/week-10-ml-intro/audio-input-video-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for audio input controlling video properties." }
                ],
                assessments: [
                    { id: "code-explanation-10", title: "Code Explanation (UI Integration)", type: "code-explanation", file: "pdfs/Assessments/Unproctored/Code-Explanation/code-explanation-week-10.pdf" }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-10", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-10.pdf",
                        prompt: "Create a simple interactive system with at least one UI control (slider, button, or checkbox). Use the control to change a visual property (like color, size, or position). Write all code from scratch using this week's UI examples. Consider: How does giving the viewer control change their relationship with your code? What does interactivity add to the experience?"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-11",
            number: 11,
            title: "Interactivity and Game Design",
            topics: ["State machines", "Game mechanics", "Collision detection", "Scoring systems", "Timers", "User input to generative systems"],
            deliverables: ["Code tracing (game systems)", "Creative challenge (interactive system/game)"],
            learningOutcomes: "By the end of this week, you should be able to implement state machines to organize interactive systems. You should create scoring systems and track game data. You should implement timers and countdowns. You should detect collisions between game objects. You should design game mechanics that create playfulness and intentionality. You should use user input to drive generative systems.",
            schedule: {
                weekStart: "2025-04-07",
                weekEnd: "2025-04-13",
                classDates: ["2025-04-14", "2025-04-16"],
                assignments: {
                    "homework-sketch-11": "2025-04-21T23:59:00",
                    "creative-challenge-03": "2025-04-27T23:59:00"
                },
                assessments: {
                    "code-tracing-11": "2025-04-18T23:59:00"
                },
                activities: {
                    "2025-04-14": { type: "lecture", topics: ["State machines", "Game mechanics", "Collision detection"] },
                    "2025-04-16": { type: "lab", topics: ["Scoring systems", "Timers", "Creative Challenge 3 introduction"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-11.html" },
                examples: [
                    { title: "State Machine", file: "code-examples/week-11-advanced-ml/state-machine.js", type: "code", description: "Review and understand this code example to be able to implement state machines in your projects. Learn how to manage different game states (menu, playing, paused, game over) and transition between them. State machines are essential for creating structured, organized interactive systems and games." },
                    { title: "State Machine (Simple)", file: "code-examples/week-11-advanced-ml/state-machine-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for state machines." },
                    { title: "Scoring System", file: "code-examples/week-11-advanced-ml/scoring-system.js", type: "code", description: "Review and understand this code example to be able to implement scoring systems, track lives, and manage game over conditions. Learn how to keep track of game data and create win/lose conditions that give your interactive systems purpose and intentionality." },
                    { title: "Scoring System (Simple)", file: "code-examples/week-11-advanced-ml/scoring-system-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for scoring systems." },
                    { title: "Timer and Countdown", file: "code-examples/week-11-advanced-ml/timer-countdown.js", type: "code", description: "Review and understand this code example to be able to implement timers and countdowns in your projects. Learn how to track time, create time limits, and use time as a game mechanic or system constraint." },
                    { title: "Timer and Countdown (Simple)", file: "code-examples/week-11-advanced-ml/timer-countdown-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for timers." },
                    { title: "Simple Game", file: "code-examples/week-11-advanced-ml/simple-game.js", type: "code", description: "Review and understand this code example to see how state machines, collision detection, scoring, and timers come together in a complete simple game. This demonstrates the core concepts of playfulness and intentionality in interactive systems." },
                    { title: "Simple Game (Simple)", file: "code-examples/week-11-advanced-ml/simple-game-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for a complete simple game." }
                ],
                assessments: [
                    { id: "code-tracing-11", title: "Code Tracing (Game Systems)", type: "code-tracing", file: "pdfs/Assessments/Unproctored/Code-Tracing/code-tracing-week-11.pdf" }
                ],
                assignments: [
                    { 
                        id: "creative-challenge-03", 
                        title: "Creative Challenge 3: Interactive System or Game", 
                        type: "creative-challenge", 
                        file: "pdfs/Assignments/Creative-Challenges/Creative-Challenge-03.pdf",
                        prompt: "Create an interactive system or game that demonstrates playfulness and intentionality. This project should combine state machines, scoring systems, timers, and collision detection to create a meaningful interactive experience.\n\nRequirements:\n• Implement a state machine with at least 3 states (e.g., menu, playing, game over)\n• Create a scoring system that tracks progress and creates win/lose conditions\n• Use timers to add structure (countdown, time limits, delays)\n• Implement collision detection between game objects\n• Design game mechanics that create intentionality—every interaction should have purpose and consequence\n\nConsider:\n• What makes your system playful and engaging?\n• How does scoring give purpose to interactions?\n• How do timers create structure and urgency?\n• What story or experience does your system tell?\n• How does state management organize your code?\n\nTechnical Focus:\n• State machines for organizing different phases\n• Scoring systems for tracking progress\n• Timers and countdowns for time-based events\n• Collision detection (circle-circle, rectangle-rectangle, point-circle)\n• Game objects using classes\n• User input (keyboard and/or mouse) to drive the system\n\nNote: Students MAY use AI tools for this project but must document their use."
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-12",
            number: 12,
            title: "Data Visualization and Generative Systems",
            topics: ["Loading external data", "JSON, CSV", "Creating visualizations", "Generative systems"],
            deliverables: ["Code writing task (data visualization)", "Creative challenge"],
            learningOutcomes: "By the end of this week, you should be able to load external data in formats like JSON and CSV. You should parse and visualize data. You should create generative systems. You should design data-driven art. You should work with real-world datasets.",
            schedule: {
                weekStart: "2025-04-14",
                weekEnd: "2025-04-20",
                classDates: ["2025-04-21", "2025-04-23"],
                assignments: {
                    "homework-sketch-12": "2025-04-28T23:59:00"
                },
                assessments: {
                    "code-writing-12": "2025-04-25T23:59:00"
                },
                activities: {
                    "2025-04-21": { type: "lecture", topics: ["Loading external data", "JSON, CSV", "Creating visualizations"] },
                    "2025-04-23": { type: "lab", topics: ["Generative systems", "Data visualization practice", "Code review"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-12.html" },
                examples: [
                    { title: "Load JSON", file: "code-examples/week-12-data-viz/load-json.js", type: "code", description: "Review and understand this code example to be able to load external JSON data files to use real data in your visualizations. Learn the preload() function, how to use loadJSON(), how to access data properties, and how to create data-driven visualizations." }
                ],
                assessments: [
                    { id: "code-writing-12", title: "Code Writing Task #4", type: "code-writing", file: "pdfs/Assessments/Unproctored/Code-Writing/code-writing-week-12.pdf" }
                ],
                assignments: [
                    { 
                        id: "homework-sketch-12", 
                        title: "Homework Sketch", 
                        type: "homework-sketch", 
                        file: "pdfs/Assignments/Homework-Sketches/Homework-Sketch-Week-12.pdf",
                        prompt: "Create a simple data visualization or generative pattern. Use an array of numbers to create a visual representation (like a bar chart, line graph, or abstract pattern). You can hardcode the data array or load it from a JSON file. Write all code from scratch using this week's data examples. Consider: How does visualizing data create meaning? What story does your visualization tell to someone viewing it?"
                    }
                ],
                resources: []
            }
        },
        {
            id: "week-13",
            number: 13,
            title: "Video Input and Processing",
            topics: ["Video capture", "Video manipulation", "Video filters", "Video as input for generative systems", "Basic video processing"],
            deliverables: ["Code explanation (video system)", "Creative challenge (video-based project)"],
            learningOutcomes: "By the end of this week, you should be able to capture video from a webcam using built-in p5.js features. You should apply filters and effects to video. You should manipulate video at the pixel level. You should use video as input for generative systems. You should create video-reactive interactive installations.",
            schedule: {
                weekStart: "2025-04-21",
                weekEnd: "2025-04-27",
                classDates: ["2025-04-28", "2025-04-30"],
                assignments: {
                    "homework-sketch-13": "2025-05-05T23:59:00"
                },
                assessments: {
                    "code-explanation-13": "2025-05-02T23:59:00"
                },
                activities: {
                    "2025-04-28": { type: "lecture", topics: ["Video capture", "Video manipulation", "Video filters"] },
                    "2025-04-30": { type: "lab", topics: ["Video as input for generative systems", "Basic video processing", "Creative challenge"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-13.html" },
                examples: [
                    { title: "Video Basic", file: "code-examples/week-13-integration/video-basic.js", type: "code", description: "Review and understand this code example to be able to capture and display video from a webcam. Learn how to use createCapture(VIDEO) to access the camera, hide the default video element, and display video on the canvas. This is the foundation for video-based interactive projects." },
                    { title: "Video Basic (Simple)", file: "code-examples/week-13-integration/video-basic-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for video capture." },
                    { title: "Video Filters", file: "code-examples/week-13-integration/video-filters.js", type: "code", description: "Review and understand this code example to be able to apply filters and effects to video. Learn how to use tint(), filter(), and other p5.js functions to manipulate video appearance. Create visual effects like grayscale, threshold, invert, and custom color effects." },
                    { title: "Video Filters (Simple)", file: "code-examples/week-13-integration/video-filters-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for video filters." },
                    { title: "Video Pixels", file: "code-examples/week-13-integration/video-pixels.js", type: "code", description: "Review and understand this code example to be able to manipulate video at the pixel level. Learn how to use loadPixels() and updatePixels() to access and modify individual pixels in video. Create custom effects by manipulating pixel colors directly." },
                    { title: "Video Pixels (Simple)", file: "code-examples/week-13-integration/video-pixels-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for pixel manipulation." },
                    { title: "Video Generative", file: "code-examples/week-13-integration/video-generative.js", type: "code", description: "Review and understand this code example to be able to use video as input for generative systems. Learn how to extract information from video (brightness, color, motion) and use it to drive generative art. Create systems where video influences particle systems, patterns, and visual effects." },
                    { title: "Video Generative (Simple)", file: "code-examples/week-13-integration/video-generative-simple.js", type: "code", description: "Clean version without comments - shows just the essential code for video-driven generative systems." }
                ],
                assessments: [
                    { id: "code-explanation-13", title: "Code Explanation (Video System)", type: "code-explanation", file: "pdfs/Assessments/Unproctored/Code-Explanation/code-explanation-week-13.pdf" }
                ],
                assignments: [],
                resources: []
            }
        },
        {
            id: "week-14",
            number: 14,
            title: "Studio Work, Portfolio, and Final Exam Study Session",
            topics: ["Independent project work", "Portfolio preparation", "Final exam study session"],
            deliverables: ["Portfolio completion", "Final exam preparation"],
            learningOutcomes: "By the end of this week, you should be able to work independently on your final portfolio project. You should prepare for the final exam. You should complete and document your portfolio work.",
            schedule: {
                weekStart: "2025-04-28",
                weekEnd: "2025-05-04",
                classDates: ["2025-05-05", "2025-05-07"],
                assignments: {},
                assessments: {},
                activities: {
                    "2025-05-05": { type: "lecture", topics: ["Portfolio preparation", "Final exam study session"] },
                    "2025-05-07": { type: "lab", topics: ["Independent project work", "Final exam study session", "Studio time"] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-14.html" },
                examples: [],
                assessments: [],
                assignments: [],
                resources: []
            }
        },
        {
            id: "week-15",
            number: 15,
            title: "Final Exam",
            topics: ["Final exam"],
            deliverables: ["Final exam"],
            learningOutcomes: "By the end of this week, you should be able to develop a cohesive portfolio. You should document your creative work. You should present your projects effectively. You should reflect on your learning journey. You should prepare work for exhibition.",
            schedule: {
                weekStart: "2025-05-05",
                weekEnd: "2025-05-11",
                classDates: [],
                assignments: {},
                assessments: {
                    "final-exam": "2025-05-11T10:30:00"
                },
                activities: {
                    "2025-05-11": { type: "final-exam", topics: ["Final Exam: May 11, 2025, 10:30 a.m. - 12:30 p.m."] }
                }
            },
            tasks: {
                keyConcepts: { title: "Key Concepts", type: "key-concepts", htmlFile: "content/key-concepts/key-concepts-week-15.html" },
                examples: [],
                assessments: [
                    { id: "final-exam", title: "Final Exam", type: "final-exam", file: null }
                ],
                assignments: [],
                resources: []
            }
        }
    ],

    sections: [
        {
            id: "foundations",
            title: "Foundations",
            weeks: [1, 2, 3, 4, 5],
            description: "Building the basics and seeing code as a creative tool"
        },
        {
            id: "building-complexity",
            title: "Building Complexity",
            weeks: [6, 7, 8],
            description: "Working with collections and creating sophisticated systems"
        },
        {
            id: "sound-ml",
            title: "Sound and Machine Learning",
            weeks: [9, 10],
            description: "Integrating sound and AI into creative projects"
        },
        {
            id: "integration",
            title: "Integration and Advanced Projects",
            weeks: [11, 12, 13, 14, 15],
            description: "Combining techniques and creating comprehensive works"
        }
    ],

    resources: {
        setup: [
            { 
                title: "OpenProcessing Setup", 
                file: "pdfs/Student-Resources/Setup-Guides/OpenProcessing-Setup.pdf",
                content: `Overview
OpenProcessing is a platform for sharing and discovering creative coding sketches. You will use it to share your work, get feedback, and explore what others are creating.

Step 1: Create an Account
• Go to https://openprocessing.org/
• Click Sign Up in the top right
• Choose one of these options: sign up with email, sign up with Google, or sign up with GitHub if you have a GitHub account
• Complete the sign-up process
• Verify your email if required

Step 2: Explore the Interface
Once you are logged in, you will see top navigation with:
• Home to browse sketches
• Sketch to create a new sketch
• Classes to join a class if the instructor creates one
• Profile for your profile and sketches

You can browse featured sketches, recent sketches, popular sketches, and use search functionality.

Step 3: Create Your First Sketch
• Click Sketch in the top navigation
• Click Create New Sketch
• You will see a code editor similar to the p5.js editor
• Write your code in the editor
• Click Run to see your sketch
• Click Save to save your sketch

Step 4: Share Your Sketch
After saving, click Share. You will get options including:
• Public (anyone can see it)
• Unlisted (only people with the link can see it)
• Private (only you can see it)

Copy the shareable link. Share with classmates or the instructor.

Step 5: Join Your Class (Optional)
If your instructor creates a class:
• Click Classes in the top navigation
• Search for your class name or use the class code
• Request to join
• Once approved, you can submit assignments, see class sketches, and get feedback

Tips and Tricks

Organizing Your Sketches
• Use descriptive titles
• Add tags for easy searching
• Write descriptions explaining your work
• Keep sketches organized in collections

Getting Feedback
• Share sketches with classmates
• Ask for specific feedback
• Comment on others' work
• Participate in discussions

Discovering Work
• Browse featured sketches
• Search by tags or keywords
• Follow artists you admire
• Explore different categories

Best Practices
• Comment your code
• Write clear descriptions
• Use appropriate tags
• Respect others' work by giving credit when remixing

Integration with p5.js Editor

Copying Code from p5.js Editor
• Copy your code from the p5.js editor
• Paste it into an OpenProcessing sketch
• Save and share

Importing to p5.js Editor
• Copy code from OpenProcessing
• Paste it into the p5.js editor
• Continue working

Troubleshooting

Can't Create Account
• Check your internet connection
• Try a different browser
• Clear your browser cache
• Contact support if needed

Sketch Won't Run
• Check for syntax errors
• Make sure code is complete
• Check the browser console for errors
• Try refreshing the page

Can't Share Sketch
• Make sure the sketch is saved
• Check privacy settings
• Verify you are logged in
• Try copying the link again

Can't Join Class
• Verify the class code is correct
• Check if the class is accepting members
• Contact the instructor if needed

Features

Collections
• Organize sketches into collections
• Share collections with others
• Create themed collections

Comments
• Comment on sketches
• Get feedback from the community
• Discuss techniques and approaches

Remix
• Remix others' sketches with permission
• Build on existing work
• Learn from examples

Follow
• Follow artists you admire
• See their latest work
• Build your creative network

Privacy Settings

Public
• Anyone can see your sketch
• It appears in search results
• It can be remixed by others

Unlisted
• Only people with the link can see it
• It does not appear in search
• It can still be remixed if the link is shared

Private
• Only you can see it
• It is not searchable
• It cannot be remixed

Next Steps
• Create your account
• Create your first sketch
• Share a sketch
• Explore other sketches
• Join the class if applicable
• Start building your portfolio

Troubleshooting

Sketch Won't Upload
Check these:
• Make sure code is complete and runs in p5.js editor
• Verify you're copying all necessary code (setup, draw, and any custom functions)
• Check that you're pasting into the correct section (usually the "sketch.js" tab)
• Ensure libraries are added if your sketch uses them
• Check for syntax errors in your code

Solutions:
• Test code in p5.js editor first
• Copy code carefully, including all functions
• Add required libraries in OpenProcessing settings
• Check console for error messages
• Simplify code to identify the problem

Sketch Runs Differently on OpenProcessing
Possible causes:
• Different p5.js version
• Missing libraries
• Different canvas size settings
• Browser compatibility issues

Solutions:
• Check p5.js version in OpenProcessing settings
• Ensure all libraries are added
• Set canvas size explicitly in code
• Test in different browsers
• Check OpenProcessing console for errors

Can't Share Sketch
Check these:
• Make sure sketch is saved
• Verify privacy settings allow sharing
• Check that sketch is published (not just saved as draft)
• Ensure you have the correct link

Solutions:
• Save sketch before sharing
• Adjust privacy settings if needed
• Publish sketch if it's still a draft
• Copy the full URL from the address bar

Code Formatting Issues
If code looks messy:
• Use a code formatter before pasting
• Check indentation is correct
• Verify all brackets are balanced
• Use OpenProcessing's code editor formatting tools

Performance Issues
If sketch runs slowly:
• Optimize your code (reduce calculations in draw)
• Check for infinite loops
• Reduce number of shapes drawn
• Consider using noLoop() if animation isn't needed

Tips for Success

Building Your Portfolio
Organize your sketches:
• Create collections by project or theme
• Use descriptive titles and descriptions
• Add tags for easy searching
• Include process notes in descriptions
• Update sketches as you improve them

Getting Feedback
Share work for feedback:
• Post sketches in class discussions
• Share with classmates for peer review
• Participate in OpenProcessing community
• Ask specific questions about your code
• Be open to suggestions and improvements

Learning from Others
Explore the community:
• Browse sketches by other students
• Study code from artists you admire
• Remix sketches to learn techniques
• Read comments and discussions
• Follow artists for inspiration

Documentation
Document your work:
• Write clear descriptions of what your sketch does
• Explain your creative process
• Note any challenges you overcame
• Credit sources of inspiration
• Include technical details for other coders

Questions?
Check the OpenProcessing help section. Review FAQs in the Student-Resources/FAQs/ folder. Contact the instructor. Ask during class. Happy sharing!`
            },
            { 
                title: "GitHub Setup", 
                file: "pdfs/Student-Resources/Setup-Guides/GitHub-Setup.pdf",
                content: `Overview
GitHub is a platform for hosting and sharing code. While not required for this course, it is useful for version control, sharing code, and building a portfolio of your work.

Step 1: Create an Account
• Go to https://github.com/
• Click Sign up in the top right
• Choose a username, email, and password
• Complete the verification process
• Choose the free plan, which is sufficient for this course

Step 2: Understand GitHub Basics

What is GitHub?
• A repository, or repo, is a folder for your project with version history
• A commit is a snapshot of your code at a point in time
• Push means uploading your code to GitHub
• Pull means downloading code from GitHub
• Clone means copying a repository to your computer

Why Use GitHub?
• Use GitHub for version control to track changes to your code
• Use it for backup, as your code is stored online
• Use it for sharing, as it is easy to share code with others
• Use it for portfolio building to showcase your work
• Use it for collaboration to work with others on projects

Step 3: Create Your First Repository
• Click the plus icon in the top right
• Select New repository
• Name your repository, for example creative-coding-projects
• Choose public or private
• Do not initialize with README unless you want to
• Click Create repository

Step 4: Upload Your First File

Method 1: Web Interface (Easiest)
• In your repository, click uploading an existing file
• Drag and drop your p5.js sketch files
• Add a commit message, for example Add first sketch
• Click Commit changes

Method 2: GitHub Desktop (Recommended)
• Download GitHub Desktop from https://desktop.github.com/
• Sign in with your GitHub account
• Clone your repository
• Add files to the repository folder
• Commit and push changes

Step 5: Share Your Repository

Making It Public
• Go to repository settings
• Scroll to Danger Zone
• Click Change visibility
• Make it public

Getting Shareable Link
• Click the Code button in green
• Copy the HTTPS URL
• Share with others

Using GitHub with p5.js

Option 1: Upload Sketches Manually
• Copy code from the p5.js editor
• Create a .js file in the repository
• Upload to GitHub
• Create a README explaining the project

Option 2: GitHub Pages (Host Live Sketches)
• Create a repository
• Upload an HTML file that includes p5.js
• Go to Settings, then Pages
• Enable GitHub Pages
• Your sketch will be live at username.github.io/repository-name

Best Practices

Repository Organization
Organize your repository with:
• Folders for each week
• JavaScript files for sketches
• README files for documentation

Commit Messages
• Be descriptive, for example Add interactive drawing tool, not just Update
• Use present tense, for example Add feature, not Added feature
• Keep messages concise but clear

README Files
Include:
• A project description
• How to run or view the project
• Key features
• Screenshots or links
• Technologies used

Troubleshooting

Can't Push Changes
Check these:
• Make sure you are signed in to GitHub
• Verify you have repository permissions (you own it or have write access)
• Try pulling first, then pushing (to get latest changes)
• Check your internet connection
• Verify you're using the correct repository

Solutions:
• Sign out and sign back in
• Check repository settings for permissions
• Use git pull before git push
• Try using GitHub Desktop if command line isn't working

Files Not Appearing
Check these:
• Make sure you committed changes (not just saved locally)
• Verify you pushed changes to GitHub
• Check that you're in the correct repository
• Refresh the page in your browser
• Check the correct branch (usually "main" or "master")

Solutions:
• Commit changes: git commit -m "message"
• Push changes: git push
• Check repository URL is correct
• Verify branch name matches

Merge Conflicts
When they occur:
• You and someone else edited the same file
• You edited a file that was changed remotely
• Multiple people are working on the same code

How to resolve:
1. Check both versions of the conflicting code
2. Decide which changes to keep (or combine both)
3. Edit the file to resolve conflicts
4. Remove conflict markers (<<<<<<<, =======, >>>>>>>)
5. Commit the resolved version
6. Push the changes

Using GitHub Desktop:
• GitHub Desktop will highlight conflicts
• Click "Resolve conflicts"
• Choose which version to keep or edit manually
• Mark as resolved and commit

Prevention:
• Pull before making changes
• Communicate with collaborators
• Work on different files when possible
• Commit and push frequently

Authentication Issues
If GitHub asks for credentials repeatedly:
• Use GitHub Desktop app (handles authentication automatically)
• Set up SSH keys for command line
• Use GitHub's personal access tokens
• Check that you're using the correct account

Large File Issues
If files won't upload:
• GitHub has file size limits (100MB for individual files)
• Use Git LFS for large files if needed
• Consider hosting large assets elsewhere
• Optimize images and assets before uploading

Repository Not Found
If you can't find your repository:
• Check you're logged into the correct account
• Verify repository name spelling
• Check if repository is private (may need access)
• Look in your repositories list on GitHub
• Check if repository was deleted or renamed

GitHub Pages Example

Simple HTML File
Create an HTML file that includes the p5.js library via CDN and links to your sketch.js file. Save it as index.html. Upload index.html and sketch.js to the repository. Enable GitHub Pages. Your sketch is live.

Resources
• GitHub guides are at https://guides.github.com/
• GitHub Desktop is at https://desktop.github.com/
• GitHub Pages is at https://pages.github.com/
• The p5.js CDN is at https://cdnjs.com/libraries/p5.js

Advanced Tips

Branching
Create branches for experimenting:
• git checkout -b experiment-name (create and switch)
• Make changes without affecting main branch
• git checkout main to return
• Merge branch when ready: git merge experiment-name

Using GitHub Desktop:
• Click "Current branch" → "New branch"
• Name your branch
• Make changes
• Switch back to main when done
• Merge branch through pull request or directly

.gitignore
Create a .gitignore file to exclude files:
• Add node_modules/ if using npm packages
• Add *.log for log files
• Add OS-specific files (.DS_Store, Thumbs.db)
• Keeps repository clean

Example .gitignore:
.DS_Store
*.log
node_modules/

README Best Practices
Include in README:
• Project title and description
• What the project does and its purpose
• How to run or view it (instructions)
• Key features and functionality
• Technologies used (p5.js, etc.)
• Screenshots or GIFs showing the project
• Link to live version if hosted
• Your name and contact info

Version Control Workflow
Recommended workflow:
1. Pull latest changes before starting
2. Create a branch for new features (optional)
3. Make changes and test locally
4. Commit with descriptive message
5. Push to GitHub
6. Create pull request if working with others
7. Merge when ready

Collaboration
Working with others:
• Communicate about what you're working on
• Pull before starting work
• Commit frequently with clear messages
• Push regularly so others see your progress
• Use pull requests for code review
• Discuss conflicts before resolving

Questions?
Check GitHub documentation at https://docs.github.com/. Review FAQs in the Student-Resources/FAQs/ folder. Contact the instructor. Ask during class. Happy coding and sharing!`
            }
        ],
        faqs: [
            { 
                title: "General Questions", 
                file: "pdfs/Student-Resources/FAQs/General-Questions.pdf",
                content: `Do I need prior coding experience?
No. This course is designed for artists and designers with no prior coding experience. We will start from the very beginning and build skills step-by-step. What if I have some coding experience? Great! You will be able to move faster and help others. There are extension opportunities and advanced challenges for students with more experience.

What computer do I need?
Any computer will work—whether Mac, Windows, or Linux—as long as it has a web browser. The tools we use are web-based, so you do not need an expensive computer. Do I need to buy software? No. All the software we use is free and open source. You will need access to a computer with a web browser.

How much time will this take?
• In-class time: 3 hours per week
• Out-of-class time: 3 to 6 hours for assignments and practice
• Total commitment: 6 to 9 hours per week

What if I'm struggling?
That is normal. Coding can be challenging, especially at first. We have multiple support systems including:
• Office hours
• Peer support through pair programming
• Complete code examples
• Video tutorials
• Troubleshooting guides

Do not hesitate to ask for help.

Can I work with others?
Yes. Collaboration is encouraged. We have:
• Pair programming sessions
• Peer instruction activities
• Code sharing for learning (with attribution)
• Group creative projects

See course policies for details on collaboration versus individual work.

What if I miss class?
Contact the instructor in advance if possible. More than three unexcused absences may result in course failure. Check with classmates for notes and catch up on missed material.

How is the course graded?
Formative assessment (25%):
• Code tracing exercises
• Code explanations
• Parsons problems
• Practice problems

Exams (35%):
• Midterm exam: 15% (March 2, 2025, in-class)
• Final exam: 20% (May 11, 2025, 10:30 a.m. - 12:30 p.m., in-class)

Summative assessment (40%):
• Creative challenges: 25%
• Code writing tasks: 8%
• Live coding: 5%
• Final portfolio: 2%

See rubrics in the Rubrics section for detailed evaluation criteria.

What are the major assignments?
Major assignments include:
• 3 Creative Challenges (25% total) — Major creative projects
• Midterm Exam (15%) — In-class proctored exam, March 2, 2025
• Final Exam (20%) — In-class proctored exam, May 11, 2025, 10:30 a.m. - 12:30 p.m.
• Code Writing Tasks (8%) — In-class coding assessments
• Live Coding (5%) — Real-time coding demonstrations
• Final Portfolio (2%) — Comprehensive creative work

Can I use AI tools?
Yes. AI tools are integrated into the course. Some assignments explicitly use AI in structured use. Other projects allow you to choose in unstructured use. Always document AI use. See AI Integration Guidelines for details. What if I don't want to use AI? That is fine. Complete code examples and resources are available for all assignments. You can succeed without using AI tools.

What about late work?
• Formative assessments: Up to one week late with a 10% penalty
• Creative challenges: Up to 3 days late with a 10% penalty per day
• Final portfolio: Due on the scheduled date (exceptions only for documented emergencies)

What if I need accommodations?
Contact the instructor and accessibility services as early as possible. Accommodations will be provided in accordance with institutional policies.

What's the course philosophy?
Code as a creative medium. Process over product — Learning and experimentation matter. Experimentation and risk-taking. Multiple pathways to learning — Different ways to succeed. Inclusive and supportive environment. Creative expression first — Technical skills serve artistic goals.

How do I get help?
• During class: Ask questions anytime
• Office hours: [Day/Time] in [Location]
• Email: [Email] (response within 24-48 hours)
• Peer support: Work with classmates
• Resources: Check guides and FAQs in the Student Resources section

What if I'm not an artist?
That is okay. This course is for anyone interested in creative coding. You do not need to identify as an artist. Just come with curiosity and openness to experimentation.

What will I create?
You will create:
• Interactive sketches
• Visual compositions
• Sound pieces
• Machine learning art
• Data visualizations
• Games
• Physical art objects
• A final portfolio

Do I need access to a maker space?
Not required, but recommended. Many assignments connect to physical outputs. If you do not have maker space access, we can discuss alternatives.

What if I'm confused about something?
Ask. There are no stupid questions. We are all learning together, and asking questions helps everyone.

Still Have Questions?
Check other FAQ files in this folder. Review course materials. Contact the instructor. Ask during class. We are here to help.`
            },
            { 
                title: "Technical Questions", 
                file: "pdfs/Student-Resources/FAQs/Technical-Questions.pdf",
                content: `My code won't run - what do I do?
Check these first:
• Look for red underlines indicating syntax errors
• Check the browser console by pressing F12 for error messages
• Make sure you have createCanvas() in setup()
• Check that brackets and parentheses match
• Verify function names are spelled correctly

Common fixes include: Missing semicolons, typos in function names, unclosed brackets, and variables not declared. See the Troubleshooting guide for more help.

What's the difference between setup() and draw()?
The setup() function runs once when the program starts. Use it for creating canvas, initializing variables, and loading files. Example: createCanvas(400, 400).

The draw() function runs continuously, approximately 60 times per second. Use it for drawing, animation, and interaction. Example: ellipse(mouseX, mouseY, 50, 50).

Rule of thumb: One-time setup goes in setup(), repeated actions go in draw().

Why do my shapes leave trails?
Cause: You are not clearing the background each frame.

Solution: Add background(220) at the start of draw().

When to skip background:
• When you want shapes to accumulate like a drawing tool
• When creating trails or paths
• When building up a composition over time

How do I center something on the canvas?
Use width / 2 and height / 2. For example, ellipse(width/2, height/2, 50, 50) centers a circle on the canvas.

Why it works:
• width equals canvas width (for example, 400)
• width / 2 equals half the width (for example, 200), which is the center horizontally
• height / 2 equals half the height (for example, 200), which is the center vertically

How do I make something move?
Use variables and frameCount. Create a variable for position, then use frameCount to update it each frame. Alternatively, change variables in draw() by incrementing them each frame.

How do I make something follow the mouse?
Use mouseX and mouseY. mouseX and mouseY are built-in variables that automatically track mouse position. No setup needed.

How do I change colors?
Use fill() for shape color. Use stroke() for outline color. RGB values range from 0 to 255 for each color component.

What's the difference between random() and noise()?
The random() function jumps around unpredictably. Each call gives a completely different value. It is good for variety and unpredictability.

The noise() function creates smooth, gradual changes. Similar inputs give similar outputs. It is good for organic movement and natural patterns.

How do I use arrays?
Create an array by listing values in square brackets: [1, 2, 3]. Access elements using index numbers starting at 0. Loop through arrays using a for loop.

How do I create functions?
Define a function using the function keyword, a name, and parameters. Call the function by using its name with arguments.

Benefits include:
• Reusable code
• Better organization
• Easier maintenance

How do I export my sketch?
• Take a screenshot by right-clicking the canvas and selecting Save image
• Use code to save programmatically with save()
• Use SVG mode for vector graphics

See the Export guide for more details.

My sketch is too slow - how do I optimize it?
Common causes include:
• Too many shapes drawn each frame
• Complex calculations in draw()
• Large canvas size
• Too many particles or objects

Solutions include:
• Reducing the number of shapes
• Moving calculations to setup() if possible
• Using a smaller canvas
• Limiting particle count
• Using frameRate() to slow down if needed

How do I debug my code?
• Use console.log() to see values in the browser console
• Check the browser console by pressing F12 or right-clicking and selecting Inspect
• Look for error messages and check line numbers
• Test incrementally by starting with a simple version and adding features one at a time, testing after each addition

Where can I find p5.js documentation?
• The official reference is at https://p5js.org/reference/
• Examples are at https://p5js.org/examples/
• Course resources are in the Code-Library/Reference/ and Code-Library/Examples/ folders

Still Have Questions?
Check the Troubleshooting guide. Review code examples. Ask during class. Contact the instructor. Check the p5.js reference. Remember that everyone gets stuck sometimes. Asking questions is part of learning.`
            }
        ],
        troubleshooting: [
            { 
                title: "Common Errors", 
                file: "pdfs/Student-Resources/Troubleshooting/Common-Errors.pdf",
                content: `Overview
This guide helps you troubleshoot common errors in p5.js creative coding. Most errors have simple solutions once you know what to look for.

Syntax Errors

Missing Semicolon
Error: Unexpected token

Example: Code missing a semicolon at the end of a line:
let x = 10 // Missing semicolon

Solution: Add a semicolon at the end of the line:
let x = 10; // Correct

Missing Brackets
Error: Expected '}' or Expected ')'

Example: Code missing a closing parenthesis:
function setup() {
    createCanvas(400, 400 // Missing closing parenthesis
}

Solution: Check that all brackets match. Count opening and closing brackets. Use the editor's bracket matching feature:
function setup() {
    createCanvas(400, 400); // Correct
}

Typo in Function Name
Error: ellips is not defined or similar

Example: Code with a typo in the function name ellipse:
ellips(200, 200, 50, 50); // Typo: should be ellipse

Solution: Check spelling of function names:
ellipse(200, 200, 50, 50); // Correct

Logic Errors

Variables Not Declared
Error: x is not defined

Example: Code using a variable x that was not declared:
function draw() {
    ellipse(x, 200, 50, 50); // x is not declared
}

Solution: Declare the variable first using let, const, or var:
let x = 200; // Declare variable
function draw() {
    ellipse(x, 200, 50, 50); // Now x is defined
}

Using Variable Before Declaration
Error: Cannot access 'x' before initialization

Example: Code using a variable before it is declared:
function draw() {
    ellipse(x, 200, 50, 50); // Using x before declaration
    let x = 200; // Declared after use
}

Solution: Declare variables before use:
let x = 200; // Declare first
function draw() {
    ellipse(x, 200, 50, 50); // Then use
}

Wrong Variable Scope
Error: Variable works in one function but not another

Example: Code declaring a variable inside setup(), making it inaccessible in draw():
function setup() {
    let x = 200; // x only exists in setup()
    createCanvas(400, 400);
}
function draw() {
    ellipse(x, 200, 50, 50); // Error: x is not defined
}

Solution: Declare the variable at the top level so it is accessible in all functions:
let x = 200; // Declare at top level
function setup() {
    createCanvas(400, 400);
}
function draw() {
    ellipse(x, 200, 50, 50); // Now x is accessible
}

p5.js Specific Errors

Missing createCanvas()
Error: Canvas not appearing or wrong size

Example: Code missing the createCanvas() function call:
function setup() {
    // Missing createCanvas()
}
function draw() {
    ellipse(200, 200, 50, 50);
}

Solution: Always call createCanvas() in setup():
function setup() {
    createCanvas(400, 400); // Required
}
function draw() {
    ellipse(200, 200, 50, 50);
}

Background Clearing Issues
Problem: Shapes leave trails or do not appear

Example: Code without a background() call in draw():
function draw() {
    ellipse(mouseX, mouseY, 50, 50); // Leaves trails
}

Solution: Call background() in draw() to clear each frame:
function draw() {
    background(220); // Clear each frame
    ellipse(mouseX, mouseY, 50, 50); // No trails
}

Color Value Out of Range
Problem: Colors do not appear as expected

Example: Code using a color value greater than 255:
fill(300, 0, 0); // Invalid: 300 is greater than 255

Solution: Keep RGB values between 0 and 255:
fill(255, 0, 0); // Valid: 0-255 range

Common Mistakes

Forgetting to Call Functions
Problem: Code does not run

Example: Code defining a function but not calling it:
function drawCircle() {
    ellipse(200, 200, 50, 50);
}
function draw() {
    // drawCircle() is never called
}

Solution: Call the function where you want it to execute:
function drawCircle() {
    ellipse(200, 200, 50, 50);
}
function draw() {
    drawCircle(); // Call the function
}

Wrong Parameter Order
Problem: Shape appears in wrong place or wrong size

Example: Code with parameters in the wrong order:
ellipse(50, 200, 100, 50); // width and height swapped
// Should be: ellipse(x, y, width, height)

Solution: Check parameter order in the reference documentation:
ellipse(200, 200, 100, 50); // Correct: x, y, width, height

Loop Issues
Problem: Infinite loop or loop does not run

Example: Code with a loop incrementing in the wrong direction:
for (let i = 0; i < 10; i--) { // i-- makes infinite loop
    ellipse(i * 50, 200, 30, 30);
}

Solution: Check the loop increment to ensure it moves toward the exit condition:
for (let i = 0; i < 10; i++) { // i++ moves toward exit
    ellipse(i * 50, 200, 30, 30);
}

Debugging Tips

Use console.log()
Add logging to see values. Use console.log() to print variable values and track execution.

Check Browser Console
Open developer tools by pressing F12 or right-clicking and selecting Inspect. Look for error messages. Check line numbers.

Test Incrementally
Build code step by step. Start with a simple version. Add features one at a time. Test after each addition.

Read Error Messages
Error messages tell you:
• What went wrong
• Where it happened with a line number
• What was expected

Getting Help

Check These First
• Check the browser console for error messages
• Check the p5.js reference for correct syntax
• Check code examples for similar code
• Check the common errors list in this document

Ask for Help
• Copy the error message exactly
• Show relevant code
• Explain what you are trying to do
• Describe what is happening versus what you expect

Prevention Tips

Good Practices
• Comment your code to help you understand later
• Test frequently to catch errors early
• Use consistent style to make it easier to spot mistakes
• Read error messages as they are helpful
• Start simple and build complexity gradually

Code Organization
• Declare variables at the top
• Use clear variable names
• Organize code logically
• Keep functions focused

Resources
• The p5.js reference is at https://p5js.org/reference/
• The p5.js examples are at https://p5js.org/examples/
• Code examples are in the Code-Library/Examples/ folder
• FAQs are in the Student-Resources/FAQs/ folder

Still Stuck?
Check the browser console. Review the error message. Check this guide. Ask the instructor. Ask classmates. Review code examples. Remember that everyone makes mistakes. Debugging is part of coding. You will get better with practice.`
            },
            { 
                title: "Debugging Strategies", 
                file: "pdfs/Student-Resources/Troubleshooting/Debugging-Strategies.pdf",
                content: `Overview
Debugging is finding and fixing errors in your code. Everyone debugs. It is a normal part of coding. This guide gives you strategies to debug effectively.

The Debugging Mindset

It's Normal
Everyone debugs. Even experienced programmers debug constantly. Errors are learning opportunities. Debugging builds problem-solving skills. You will get better with practice.

Stay Calm
When you find an error, do not panic. Take a deep breath. Read the error message. Think systematically.

Step 1: Read the Error Message

Browser Console
How to access:
• Press F12 or right-click and select Inspect
• Click the Console tab
• Look for red error messages

What to look for:
• Check the error type such as SyntaxError or ReferenceError
• Check the error message explaining what went wrong
• Check the line number showing where it happened
• Check the file name showing which file

Common Error Types

SyntaxError
Indicates missing brackets, parentheses, or semicolons, typos in code. Fix by checking syntax carefully.

ReferenceError
Indicates a variable not defined or a function not found. Fix by checking variable and function names.

TypeError
Indicates wrong data type or calling a function on the wrong type. Fix by checking what type of data you are using.

Step 2: Check the Line Number

Find the Problem
Error messages show line numbers. Go to that line in your code. Look for obvious errors. Check syntax around that line. Look a few lines before and after.

Common Issues at Specific Lines

For missing brackets:
• Check that all curly braces and parentheses match
• Count opening and closing brackets
• Use the editor's bracket matching feature

For typos:
• Check function names such as ellipse not ellips
• Check variable names, which are case-sensitive
• Check spelling carefully

Step 3: Use console.log()

Add Logging
See what is happening by adding console.log() statements to print variable values and track execution flow.

When to use:
• Check variable values
• See if code runs
• Track execution flow
• Understand what is happening

Example Debugging
Add console.log() statements to see variable values and verify code execution:

let x = 200;
function draw() {
    x = x + 1;
    console.log('x value:', x); // See the value
    ellipse(x, 200, 50, 50);
}

Check the console to see if variables are updating, if values are correct, and if code is running at all.

Step 4: Test Incrementally

Build Step by Step
Do not write everything at once. Write a basic version. Test that it works. Add one feature. Test again. Repeat.

Start with a basic circle. Then add a variable. Then add animation. Test after each addition.

Step 5: Isolate the Problem

Narrow It Down
If code does not work, comment out parts. Test what is left. Find what breaks it. Focus on that part.

Uncomment one part at a time to find what is broken.

Common Debugging Scenarios

Nothing Appears on Screen
Check these:
• Check if createCanvas() is in setup()
• Check if background() is clearing the screen
• Check if shapes are being drawn
• Check if colors are visible
• Check if shapes are on screen by checking coordinates

Example: Add console.log() statements to check if draw() is running:
function draw() {
    console.log('draw() is running'); // Verify draw() executes
    background(220);
    ellipse(200, 200, 50, 50);
}

Shapes in Wrong Position
Check these:
• Check coordinate values
• Check variable values using console.log()
• Check for calculation errors
• Check canvas size

Example: Add console.log() to see actual values:
let x = width / 2;
let y = height / 2;
function draw() {
    console.log('x:', x, 'y:', y); // See actual values
    ellipse(x, y, 50, 50);
}

Animation Not Working
Check these:
• Check if the variable is changing
• Check if background() is clearing
• Check if draw() is running
• Check if frameCount is updating

Example: Add console.log() to check frameCount and variable changes:
let x = 0;
function draw() {
    console.log('frameCount:', frameCount, 'x:', x);
    background(220);
    x = x + 1; // Should increase each frame
    ellipse(x, 200, 50, 50);
}

Interaction Not Working
Check these:
• Check if mousePressed() is defined
• Check if mouseX and mouseY are being used
• Check if conditions are correct
• Check if code is in the right function

Example: Add console.log() to check if the function runs:
function mousePressed() {
    console.log('mousePressed() called'); // Verify function runs
    ellipse(mouseX, mouseY, 50, 50);
}

Systematic Debugging Process

Step-by-Step Method

First, reproduce the error:
• Can you make it happen again?
• What triggers it?
• When does it occur?

Second, understand the error:
• Read the error message
• Check the line number
• Understand the error type

Third, isolate the problem:
• Comment out code
• Test parts separately
• Find what breaks

Fourth, fix the problem:
• Apply the fix
• Test that the fix works
• Verify no new errors

Fifth, test everything:
• Test all features
• Check edge cases
• Make sure nothing broke

Prevention Strategies

Write Clean Code
Good practices include:
• Commenting your code
• Using clear variable names
• Organizing logically
• Testing frequently

Avoid:
• Writing everything at once
• Copying without understanding
• Ignoring errors
• Not testing

Common Prevention

Before coding:
• Plan your approach
• Understand requirements
• Think about structure

While coding:
• Test frequently
• Check syntax as you go
• Use console.log liberally
• Fix errors immediately

Getting Help

When to Ask
Ask for help when:
• You have tried debugging strategies
• The error message is unclear
• You are stuck for 15 or more minutes
• You need clarification

How to Ask
• Provide the error message copied exactly
• Provide relevant code
• Explain what you have tried
• Explain what you expected versus what happened

Resources
• The p5.js reference is at https://p5js.org/reference/
• Code examples are in the Code-Library/Examples Page

Remember
Debugging is a normal part of coding. It is a skill that improves with practice. It is a learning opportunity. It is part of problem-solving. You will get better with experience, by practicing, by learning from mistakes, and by staying curious. Do not get discouraged. Every programmer debugs constantly. You are learning an essential skill.`
            }
        ],
        externalTutorials: [
            {
                category: "p5.js Tutorials",
                items: [
                    {
                        title: "The Coding Train - p5.js for Beginners",
                        url: "https://thecodingtrain.com/beginners/p5js/",
                        description: "Daniel Shiffman's comprehensive p5.js tutorials for beginners. Engaging video series covering fundamentals and creative coding concepts.",
                        type: "video"
                    },
                    {
                        title: "The Coding Train YouTube Channel",
                        url: "https://www.youtube.com/c/TheCodingTrain",
                        description: "Daniel Shiffman's YouTube channel with hundreds of creative coding tutorials, including p5.js, JavaScript, and machine learning.",
                        type: "video"
                    },
                    {
                        title: "p5.js Official Tutorials",
                        url: "https://p5js.org/tutorials/",
                        description: "Official p5.js tutorials covering topics from getting started to advanced techniques, written by the p5.js community.",
                        type: "tutorial"
                    },
                    {
                        title: "p5.js Education Resources",
                        url: "https://p5js.org/education-resources/",
                        description: "Curated educational resources for teaching and learning with p5.js, including lesson plans and teaching materials.",
                        type: "resource"
                    },
                    {
                        title: "p5.js Reference",
                        url: "https://p5js.org/reference/",
                        description: "Complete reference documentation for all p5.js functions, constants, and classes with examples and explanations.",
                        type: "reference"
                    }
                ]
            },
            {
                category: "OpenProcessing",
                items: [
                    {
                        title: "OpenProcessing.org",
                        url: "https://www.openprocessing.org/",
                        description: "Platform where artists and developers share p5.js sketches. Explore thousands of creative coding examples and get inspired.",
                        type: "platform"
                    },
                    {
                        title: "OpenProcessing - Featured Sketches",
                        url: "https://www.openprocessing.org/browse/",
                        description: "Browse featured and popular sketches on OpenProcessing to see what's possible with creative coding.",
                        type: "examples"
                    }
                ]
            },
            {
                category: "Additional Resources",
                items: [
                    {
                        title: "Processing Foundation",
                        url: "https://processingfoundation.org/",
                        description: "The Processing Foundation supports and promotes software literacy within the visual arts and visual literacy within technology.",
                        type: "organization"
                    },
                    {
                        title: "p5.js Web Editor",
                        url: "https://editor.p5js.org/",
                        description: "Online code editor for p5.js with live preview, perfect for experimenting and sharing sketches without local setup.",
                        type: "tool"
                    },
                    {
                        title: "HTML Color Names (W3Schools)",
                        url: "https://www.w3schools.com/tags/ref_colornames.asp",
                        description: "Full list of HTML color names with swatches—easy way to get interesting colors (e.g. Tomato, DodgerBlue) for fill() and background().",
                        type: "reference"
                    }
                ]
            }
        ]
    }
};

// Helper functions to access course data
function getWeek(weekId) {
    return courseData.weeks.find(w => w.id === weekId);
}

function getWeekByNumber(weekNumber) {
    return courseData.weeks.find(w => w.number === weekNumber);
}

function getAllWeeks() {
    return courseData.weeks;
}

function getSection(sectionId) {
    return courseData.sections.find(s => s.id === sectionId);
}

function getAllSections() {
    return courseData.sections;
}

