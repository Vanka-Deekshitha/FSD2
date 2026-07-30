"use strict";
// 1. Parameter & Return Types (Explicit)
// This function takes a string and returns a string
function greet(name) {
    return `Namaste, ${name}!`;
}
// 2. Default Parameters
// If 'city' is not provided, it defaults to "Hyderabad"
function getLocation(city = "Hyderabad") {
    return `Location: ${city}`;
}
// 3. Optional Parameters (using ?)
// 'message' can be skipped when calling this function
function sendAlert(phoneNumber, message) {
    console.log(`Sending SMS to ${phoneNumber}...`);
    if (message) {
        console.log(`Content: ${message}`);
    }
}
// 4. REST Parameters (using ...)
// Captures multiple arguments into a single array
function calculateTotalScores(...scores) {
    return scores.reduce((total, current) => total + current, 0);
}
console.log(greet("Prabhas"));
// console.log(greet(1));                      
console.log(getLocation());
console.log(getLocation("Vijayawada"));
sendAlert(9876543210);
sendAlert(9876543210, "Movie starts now!");
const total = calculateTotalScores(10, 20, 30, 40);
console.log(`Total Score: ${total}`);
