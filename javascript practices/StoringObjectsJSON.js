// =============================================
// WEEK 7 — Task 13.1: Local Storage Basics
//  Exercise 1: STORING OBJECTS JSON
//  Student: Isabellah Machio | IYF Academy
// =============================================
// localStorage only stores strings!
const user = {
    name: "John",
    age: 30,
    hobbies: ["coding", "reading"]
};

// WRONG - doesn't work as expected
localStorage.setItem("user", user);
console.log(localStorage.getItem("user"));  // "[object Object]"

// RIGHT - serialize to JSON
localStorage.setItem("user", JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem("user"));
console.log(retrieved);  // { name: "John", age: 30, hobbies: [...] }

// The exercise demonstrates why you must serialize objects before storing them in localStorage.
// localStorage can only store strings. When you pass an object directly, JavaScript automatically calls .toString() on it, which gives you the useless string "[object Object]".
// To store objects, you need to convert them to a string format. JSON (JavaScript Object Notation) is a common format for this. You can use JSON.stringify() to convert an object to a JSON string before storing it, and JSON.parse() to convert it back to an object when retrieving it.
// This is a crucial step when working with localStorage, as it allows you to preserve the structure and data of your objects.
// MethodPurposeJSON.stringify(obj)Converts object → JSON string for storingJSON.parse(str)Converts JSON string → object for reading