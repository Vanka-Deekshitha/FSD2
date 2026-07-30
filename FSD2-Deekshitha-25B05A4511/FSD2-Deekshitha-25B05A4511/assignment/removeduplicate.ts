let string = "Hello";
let result = "";

for (let i = 0; i < string.length; i++) {
    let ch = string[i];

    if (ch !== undefined && result.indexOf(ch) == -1) {
        result = result + ch;
    }
}
console.log(result);