let n = 153;
let temp = n, sum = 0;
let digits = n.toString().length;
while (temp > 0) {
    let d = temp % 10;
    sum += d ** digits;
    temp = Math.floor(temp / 10);
}
console.log(sum == n ? "Armstrong" : "Not Armstrong");