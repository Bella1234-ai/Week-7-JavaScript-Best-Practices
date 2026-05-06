// BAD  → u and u.a mean nothing
const x = users.filter(u => u.a > 18);

// GOOD → the result name tells you exactly what's in the array
const adultUsers = users.filter(user => user.age > 18);
