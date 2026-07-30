namespace MathOperations {

    export function add(a: number, b: number): number {
        return a + b;
    }
    export function subtract(a: number, b: number): number {
        return a - b;
    }
    export function multiply(a: number, b: number): number {
        return a * b;
    }
    export function divide(a: number, b: number): number {
        return a / b;
    }
}
console.log("Addition:", MathOperations.add(10,1));
console.log("Subtraction:", MathOperations.subtract(27,24));
console.log("Multiplication:", MathOperations.multiply(22, 10));
console.log("Division:", MathOperations.divide(29,5));