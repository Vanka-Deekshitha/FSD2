let n = 6;
let sum = 0;
for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) sum += i;
}
console.log(sum == n ? "Perfect" : "Not Perfect");