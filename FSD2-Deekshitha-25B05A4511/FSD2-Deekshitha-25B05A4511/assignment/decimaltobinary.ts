let n = 10;
let binary = "";
while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
}
console.log(binary);