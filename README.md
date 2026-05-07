# Week-7-JavaScript-Best-Practices
learn to persist data, structure larger applications, and write professional-quality code. You'll also refactor your previous projects.  Lessons:      Lesson 13: Local Storage &amp; State Management     Lesson 14: JavaScript Best Practices &amp; Code Quality
# Week {Number}: {Project Title}

## Author
- **Name:** ISABELLA SIMIYU
- **GitHub:** [@bella1234-ai](https://github.com/bella1234-ai)
- **Date:** 07/05/2026

## Project Description
1. Notes App — notes-app.html
A two-panel note-taking app with sidebar and editor. Built to practice localStorage persistence — notes survive closing the browser entirely. Demonstrated the single-key JSON pattern for saving complex data.

2. Autosave Form — autosave-form.html
A job application form that saves every field as you type. Built to practice sessionStorage — drafts survive a tab refresh but are wiped when the tab closes. Showed the form_${input.name} per-field key pattern from the exercise, plus a live storage inspector panel.

3. Contact Form — contact-form.html
A simpler contact form using the exact pattern from the exercise — per-field sessionStorage keys, save on input, clear on submit. Included a live sessionStorage viewer so you can watch keys appear and disappear in real time.

4. Todo App (Centralized State) — todo-app.html
A full todo app built around the centralized state pattern — one state object, one setState function, everything flows through it. Demonstrated localStorage persistence, filter state, and theme toggling all managed from a single source of truth.

5. Store Pattern — store-pattern.html
An interactive demo of the subscriber/observer pattern — createStore with getState, setState, and subscribe. Multiple components (counter, user, theme) all subscribe to the same store and update independently. Included a live event log showing every notification firing.

6. Shopping Cart — shopping-cart.html
A full e-commerce cart using all the starter functions from the exercise — addToCart, updateQuantity, removeFromCart, getCartTotal, getCartCount, saveCart, loadCart. 12 products, live totals, tax, free shipping threshold, and localStorage persistence.

7. Modular Todo (from scratch) — todo-modular/
The todo app reorganized into 6 separate files following the ES Modules pattern from the exercise — utils.js, storage.js, state.js, ui.js, app.js, index.html. Each file has one responsibility and nothing else.

8. Modular Taskflow (from your code) — taskflow-modular/
Your own taskflow todo app reorganized into the same modular structure. Every function from the original single file was extracted into the correct module — escapeHtml → utils.js, loadTodos/saveTodos → storage.js, toggleTodo/deleteTodo → state.js, renderTodos → ui.js, event listeners → app.js.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- (list all technologies)

## Features
- Feature 1
- Feature 2
- Feature 3

## How to Run
1. Clone this repository
2. Open `index.html` in your browser
   OR
   Run `npm install` then `npm start`

## Lessons Learned
What did you learn while building this project?

## Challenges Faced
What problems did you encounter and how did you solve them?

## Screenshots (optional)
![Screenshot description](path/to/screenshot.png)

## Live Demo (if deployed)
[View Live Demo](https://your-deployed-url.com)
