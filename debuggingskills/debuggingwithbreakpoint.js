// 1. Programmatic — pause from code itself
debugger;  // pauses exactly here when DevTools is open

// 2. Conditional breakpoint
// Right-click a line number → "Add conditional breakpoint"
// Only pauses when the condition is true — e.g:
user.id === 42

// 3. Logpoint (no pause, just logs)
// Right-click → "Add logpoint"
// Like console.log without touching your code
// e.g: "User at this point: {user.name}"

//Sources panel while paused:
//├── Scope panel (right side)
//│   ├── Local  → variables in the current function
//│   ├── Closure → variables from outer functions
//│   └── Global → window-level variables
//│
//├── Call Stack panel
//│   └── shows every function call that led here
//│       handleSubmit → createUser → validateUser  ← you are here
//│
//└── Watch panel
//    └── type any expression to evaluate it live
//        e.g. user.age > 18, cart.length, response.status