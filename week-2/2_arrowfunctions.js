"use strict";
// 1. Traditional Named Function (The "Full Form")
// Full Form: function functionName(parameters): returnType { body }
function calculateTotalTraditional(price, taxRate) {
    return price + (price * taxRate);
}
// 2. Arrow Function (The Concise Form)
// This is the same logic as above but using the => (fat arrow) syntax.
const calculateTotalArrow = (price, taxRate) => {
    return price + (price * taxRate);
};
// 3. Shorthand Arrow Function
// If the function only has one line, we can omit 'return' and the curly braces {}.
const getWelcomeMessage = (theatre) => `Welcome to ${theatre} Cinemas!`;
const ticketPrice = 250;
const gstRate = 0.18;
console.log(getWelcomeMessage("PVR"));
// Using the traditional method
const total1 = calculateTotalTraditional(ticketPrice, gstRate);
console.log(`Total (Traditional): ₹${total1}`);
// Using the arrow function method
const total2 = calculateTotalArrow(ticketPrice, gstRate);
console.log(`Total (Arrow): ₹${total2}`);
