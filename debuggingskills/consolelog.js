// console.log — everyday output, use for anything during development
console.log("Basic message");                              // plain text
console.log("%cImportant!", "color: red; font-size: 20px"); // styled with CSS
console.log({ user, cart, total });                        // objects expand interactively

// The %c directive applies CSS to the text that follows it — useful for making critical logs stand out in a noisy console.

// console.warn / console.error — severity levels
console.warn("This might be a problem");   // yellow ⚠ — non-breaking concern
console.error("This is definitely wrong"); // red ✖ — includes a stack trace automatically
// Use warn for deprecations, unexpected-but-handled situations. Use error for things that should never happen. Both are filterable in DevTools, so you can hide log and only see errors.

// console.table — the most underused method
console.table(users);
// Instead of an unreadable array of collapsed objects, you get a formatted spreadsheet right in the console. Essential when debugging lists of data.

// console.group / console.groupEnd — organise related logs
console.group("User Processing");
console.log("Step 1: validate");
console.log("Step 2: normalize");
console.groupEnd();

// Everything between those two calls is collapsible under the group label. Use console.groupCollapsed() if you want it collapsed by default — great for loops that would otherwise flood the console.

// console.time / console.timeEnd — quick performance measurement
console.time("fetchUsers");
await fetchUsers();
console.timeEnd("fetchUsers"); // → "fetchUsers: 342ms"
// No Date math needed. The string you pass is the label — it must match exactly between time and timeEnd. Useful for spotting slow functions before reaching for a full profiler.
