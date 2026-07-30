let arr = [9, 8, 4, 9, 2, 9];
console.log("Duplicate Elements:");
for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < i; j++) {
        if (arr[i] == arr[j]) {
            duplicate = true;
        }
    }
    if (duplicate) {
        continue;
    }
    for (let k = i + 1; k < arr.length; k++) {
        if (arr[i] == arr[k]) {
            console.log(arr[i]);
            break;
        }
    }
}