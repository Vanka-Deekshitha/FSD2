let start = 10, end = 60;
for (let n = start; n <= end; n++) {
    let prime = true;
    if (n < 2) continue;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) console.log(n);
}