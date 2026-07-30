let a = [98,79,56,47,600];

let largest = a[0]!;
let second = a[0]!;

for (let i = 0; i < a.length; i++) {

    if (a[i]! > largest) {
        second = largest;
        largest = a[i]!;
    }
    else if (a[i]! > second && a[i]! != largest) {
        second = a[i]!;
    }
}
console.log("Second Largest =", second);