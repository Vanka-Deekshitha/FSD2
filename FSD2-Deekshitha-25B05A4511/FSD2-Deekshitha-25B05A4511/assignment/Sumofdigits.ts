let x = 9849;
let tot = 0;
while (x > 0) {
    let digit = x % 10;
    tot = tot + digit;
    x = Math.floor(x / 10);
}
console.log("Sum of Digits =", tot);