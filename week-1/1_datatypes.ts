// 1. String: Storing text
let userName: string = "Alice";
// 2. Number: Storing numeric values (integers or decimals)
let userAge: number = 25;
// 3. Boolean: Storing true/false logic
let isMember: boolean = true;
console.log("Data type of userName is --> " + typeof userName);
console.log("Data type of userAge is --> " + typeof userAge);
console.log("Data type of isMember is --> " + typeof isMember);
// A simple function using these types
function displayUserProfile(
    name: string,
    age: number,
    active: boolean
): void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}

displayUserProfile(userName, userAge, isMember);
