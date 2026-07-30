let a = [10,11,13,16,18];
let num = 2;
for (let i = 0; i < num; i++) {
    let first = a.shift();
    a.push(first!);
}
console.log(a);