//Bug 1 — Off-by-one error in the loop i <= items.length
js// BAD — runs one iteration too many
for (let i = 0; i <= items.length; i++)

// On the last iteration: i = 3, items[3] = undefined
// Then undefined.price throws: "Cannot read properties of undefined"
js// GOOD — stop before the last index
for (let i = 0; i < items.length; i++)
//Arrays are zero-indexed — a 3-item array has indices 0, 1, 2. When i reaches 3, items[3] is undefined and the whole thing crashes.

//Bug 2 — Typo in property name item.quanity
js// BAD — misspelled, returns undefined
total += item.price * item.quanity;

// undefined * anything = NaN
// NaN spreads and poisons the entire total
js// GOOD — matches the object property name exactly
//total += item.price * item.quantity;
//This is the sneakiest bug — JavaScript doesn't throw an error when you access a property that doesn't exist, it just silently returns undefined, which then makes your math go wrong.

//Bug 3 — Wrong discount logic total > 100
js// BAD — discount never applies
// Order total is 69, which is NOT > 100
if (total > 100) {
    total = total * 0.9;
}

// Expected output says discount SHOULD apply: 69 → 62.1
// That means the threshold should be 50, not 100
js// GOOD — matches the expected output
if (total > 50) {
    total = total * 0.9;
}
//The expected output 62.1 tells us: 69 * 0.9 = 62.1 — the discount IS supposed to fire. Working backwards, the threshold must be below 69, so > 50 is the correct condition.

//The fully fixed code:
function calculateOrderTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {   // ✅ Bug 1 fixed: < not <=
        const item = items[i];
        total += item.price * item.quantity;    // ✅ Bug 2 fixed: quantity not quanity
    }

    if (total > 50) {                           // ✅ Bug 3 fixed: 50 not 100
        total = total * 0.9;
    }

    return total;
}
//Verify the math:
//Book:     15 × 2 = 30
//Pen:       3 × 5 = 15
//Notebook:  8 × 3 = 24
//           total = 69  ← before discount

//69 > 50 → apply 10%
//69 × 0.9 = 62.1 ✅