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

- HTML5 — structure of every app
- CSS3 — all styling, animations, transitions, CSS variables for theming
- Vanilla JavaScript (ES6+) — all logic, no frameworks

## Features
- Features used in doing this exersise of java script practises
- Storage Features
Feature What it did localStorage.set Item Saved todos, cart, state permanently local Storage.ge tIte mLoaded saved data on page refreshlocalStorage.removeItemCleared specific keyslocalStorage.clearWiped all app storagesessionStorage.setItemSaved form fields temporarilysessionStorage.getItemRestored form drafts on refreshsessionStorage.removeItemCleared fields on form submitJSON.stringifyConverted objects to strings for storageJSON.parseConverted strings back to objects

State Management Features
FeatureWhat it didCentralized state objectSingle source of truth for all datasetState functionOnly way to update stateObserver/subscriber patternNotified components when state changedsubscribe / unsubscribeComponents opted in and out of updatesFilter stateRemembered active/completed/all viewTheme stateRemembered light/dark preferenceAuto-persist on every changeState saved to localStorage automatically

DOM Features
FeatureWhat it didgetElementByIdSelected single elements by IDquerySelectorSelected first matching elementquerySelectorAllSelected all matching elementsinnerHTMLRendered dynamic lists and componentstextContentUpdated text safely without HTMLclassList.addAdded CSS classesclassList.removeRemoved CSS classesclassList.toggleSwitched classes on/offdatasetStored IDs on HTML elementsstyleChanged inline styles dynamicallyscrollIntoViewScrolled to success messagesfocusReturned cursor to input after adding

Event Features
FeatureWhat it didaddEventListenerAttached all click, input, keydown handlersclick eventButtons, checkboxes, filter tabsinput eventTriggered autosave as user typedchange eventDetected checkbox toggleskeydown / keypressSubmitted forms on Enter keysubmit eventHandled form submissionsbeforeunload eventSafety-saved filter preference on tab closeEvent delegationOne listener handled all dynamic child elementse.preventDefaultStopped form default page reloade.stopPropagationPrevented event bubbling on nested elementse.target / e.currentTargetIdentified which element triggered the event

Array Features
FeatureWhat it didarray.pushAdded new todo/cart itemarray.filterRemoved items, applied filtersarray.mapTransformed arrays into HTML stringsarray.findLocated specific todo/cart item by IDarray.reduceCalculated cart totals and item countsarray.someChecked if any field had contentarray.forEachLooped over inputs, subscribers, buttonsSpread operator [...arr]Copied arrays without mutating originalsArray.fromConverted NodeLists to arrays

Object Features
FeatureWhat it didObject.assignMerged state updatesObject.keysListed storage keys for cleanupObject.valuesChecked if form had any contentObject.entriesIterated state for inspector displaySpread operator {...obj}Copied objects without mutating originalsComputed property namesDynamic keys like form_${input.name}Optional chaining ?.Safely accessed nested properties

Function Features
FeatureWhat it didArrow functionsConcise callbacks everywhereDefault parametersload(key, defaultValue = null)Rest parameters ...argsLogger wrapper forwarded all argumentssetTimeoutDebounce delay, toast auto-hide, UI animationsclearTimeoutReset debounce timer on each keystrokeDebounce patternPrevented saving on every single keypressClosureSubscriber pattern, store encapsulationtry/catchSafe storage reads, form error handlingasync/awaitAsynchronous operations in exercisesIIFE patternEncapsulated module scope

ES Modules Features
FeatureWhat it didexport functionMade functions available to other filesexport defaultExported single module valueimport { }Imported specific functions by nameimport fromLinked files together<script type="module">Enabled ES module support in browserModule scopeVariables private to each file by default

CSS Features
FeatureWhat it didCSS custom properties (--var)Theming, dark/light mode switchingdata-theme attributeToggled entire theme with one attributeCSS animations (@keyframes)Slide-in todos, count bump, pulse dotCSS transitionsSmooth hover, focus, color changesbackdrop-filterBlur effect on modal overlayCSS GridProduct grid, two-column layoutsFlexboxHeader, buttons, todo items, cart rowsclip-pathAngled cart button shapecolor-mix()Dynamic tinted backgroundsMedia queriesResponsive layouts::-webkit-scrollbarCustom styled scrollbarsposition: stickyFixed header and cart sidebar

Debugging Features Covered
FeatureWhat it didconsole.logGeneral output and inspectionconsole.warnNon-breaking issuesconsole.errorCritical errors with stack traceconsole.tableDisplayed arrays as spreadsheetsconsole.groupGrouped related log messagesconsole.timeMeasured function performanceconsole.assertVerified assumptions silentlyconsole.tracePrinted full call stackdebugger statementTriggered breakpoint from codeChrome DevTools breakpointsPaused and stepped through executionConditional breakpointsPaused only when condition was trueScope panelInspected live variable valuesCall stack panelTraced execution pathWatch panelEvaluated expressions while paused

Bottom line — across all 8 builds and exercises you touched virtually every core area of modern vanilla JavaScript: storage, state, DOM, events, arrays, objects, modules, CSS, and debugging. That's a very solid foundation.

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
