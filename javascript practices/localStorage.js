// =============================================
// WEEK 7 — Task 13.1: Local Storage Basics
//  Exercise 1: Getting Started with localStorage
//  Student: Isabellah Machio | IYF Academy
// =============================================
// Store a simple value
localStorage.setItem("username", "John");

// Retrieve the value
const username = localStorage.getItem("username");
console.log(username);  // "John"

// Remove a value
localStorage.removeItem("username");

// Clear everything
localStorage.clear();

// Check if key exists
if (localStorage.getItem("username")) {
    console.log("User exists");
}