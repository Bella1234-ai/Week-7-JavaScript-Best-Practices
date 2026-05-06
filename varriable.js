// BAD  → what is d? a day? duration? data?
const d = new Date();

// GOOD → unambiguous
const currentDate = new Date();

// describe what they hold
// Code is read far more than it's written. When you or someone else opens a file 3 months later, d tells you nothing — currentDate tells you everything instantly.
// 