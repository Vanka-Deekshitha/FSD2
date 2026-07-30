let arr = [9,8,4,2,6];
let n = 5;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]!;
}
let total = (n * (n + 1)) / 2;
console.log("Missing Number =", total - sum);