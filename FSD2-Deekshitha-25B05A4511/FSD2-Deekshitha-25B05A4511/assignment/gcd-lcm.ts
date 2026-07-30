let a = 12, b = 18;
let x = a, y = b;
while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log("GCD =", a);
console.log("LCM =", (x * y) / a);