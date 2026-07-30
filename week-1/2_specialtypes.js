"use strict";
// 1. Using the 'any' type
let flexibleValue = 10;
flexibleValue = "Now I am a string!";
flexibleValue = true;
// 2. Using the 'unknown' type
let mysteryValue = "Hello Vishnu";
// This would cause a compile error without a check:
// let length: number = mysteryValue.length;
if (typeof mysteryValue === "string") {
    console.log("Length of unknown string: " + mysteryValue.length);
}
// 3. Using the 'void' type
function logNotification(message) {
    console.log("ALERT: " + message);
    // return "Success";
    // Error: Cannot return a value in a void function
}
logNotification("Environment Setup Complete!");
