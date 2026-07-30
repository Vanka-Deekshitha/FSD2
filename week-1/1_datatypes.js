"use strict";
// 1. String: Storing text
let userName = "Alice";
// 2. Number: Storing numeric values (integers or decimals)
let userAge = 25;
// 3. Boolean: Storing true/false logic
let isMember = true;
console.log("Data type of userName is --> " + typeof userName);
console.log("Data type of userAge is --> " + typeof userAge);
console.log("Data type of isMember is --> " + typeof isMember);
// A simple function using these types
function displayUserProfile(name, age, active) {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}
displayUserProfile(userName, userAge, isMember);
