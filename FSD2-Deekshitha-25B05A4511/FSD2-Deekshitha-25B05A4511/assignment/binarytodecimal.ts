let b = "1011";
let d = 0;
let p = 0;
for (let i = b.length - 1; i >= 0; i--) {
    if (b[i] == "1") {
        d = d + Math.pow(2, p);
    }
    p++;
}
console.log(d);