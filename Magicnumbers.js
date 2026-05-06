// BAD  → where did 0.1 come from? what does it mean?
return a * b * 0.1;

// GOOD → self-documenting
const DISCOUNT_RATE = 0.1;
return price * quantity * DISCOUNT_RATE;