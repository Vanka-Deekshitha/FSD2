"use strict";
// Generic Identity Function
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("Hello"));
// <T> tells TypeScript:
// "This function works with any type T"
// This function takes an array of items and returns the first item
function getFirstPackage(items) {
    // We don't know what T is yet, but we know it's the first element
    return items[0];
}
// Another example:
// A function to wrap an item in a "Delivery Box"
function wrapInBox(item) {
    return {
        parcel: item,
        timestamp: new Date()
    };
}
// 1. Working with a list of City Names (Strings)
const cities = ["Mumbai", "Delhi", "Bangalore"];
const firstCity = getFirstPackage(cities); // T becomes string
console.log(`Sending first parcel to: ${firstCity.toUpperCase()}`);
// 2. Working with Pincodes (Numbers)
const pincodes = [400001, 110001, 560001];
const firstPin = getFirstPackage(pincodes); // T becomes number
console.log(`Starting delivery at Pincode: ${firstPin}`);
const phone = {
    brand: "Samsung",
    model: "S24"
};
const packedPhone = wrapInBox(phone); // T becomes Electronic
console.log(`Packed item: ${packedPhone.parcel.brand} at ${packedPhone.timestamp}`);
// Note: TypeScript is smart!
// You can often omit the <Type> and it will infer it.
const autoCity = getFirstPackage(cities); // Works perfectly!
console.log(`Automatically inferred city: ${autoCity}`);
