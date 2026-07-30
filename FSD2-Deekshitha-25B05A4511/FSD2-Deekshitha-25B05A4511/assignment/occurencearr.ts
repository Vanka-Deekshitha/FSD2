let a = [9, 8, 4, 9, 2, 9];
for (let i = 0; i < a.length; i++) {
    let count = 1;
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            count++;
        }
    }
    let found = false;
    for (let k = 0; k < i; k++) {
        if (a[i] == a[k]) {
            found = true;
        }
    }
    if (!found) {
        console.log(a[i] + " = " + count);
    }
}