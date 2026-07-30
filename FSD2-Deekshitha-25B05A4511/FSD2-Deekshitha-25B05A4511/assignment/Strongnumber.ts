let n = 565;
let temp = n, sum = 0;
while (temp > 0) {
    let d = temp % 10;
    let fact = 1;
    for (let i = 1; i <= d; i++)
        fact *= i;
    sum += fact;
    temp = Math.floor(temp / 10);
}
console.log(sum == n ? "Strong" : "Not Strong");