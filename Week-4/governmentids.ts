// governmentIds.ts
// Define a namespace to group Indian ID validation logic
namespace GovernmentID {
    // This constant is PRIVATE to the namespace
    // Students cannot access this from outside
    const aadhaarLength = 12;
    // We use the 'export' keyword INSIDE the namespace
    // to make these functions accessible from the outside
    export function validateAadhaar(id: string): boolean {
        // Simple logic: check if it's numeric and exactly 12 digits
        const isNumeric = /^\d+$/.test(id);
        return isNumeric && id.length === aadhaarLength;
    }
    export function validatePAN(pan: string): boolean {
        // PAN Format: 5 Alphabets, 4 Digits, 1 Alphabet
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan.toUpperCase());
    }
    // Nested Namespace (Optional: advanced concept for freshers)
    export namespace Tax {
        export function calculateGST(amount: number): number {
            return amount * 0.18; // Standard 18% GST
        }
    }
}
// ---------- Using the Namespace ----------
// Notice how we use the 'Dot Notation' (NamespaceName.FunctionName)
const myAadhaar = "123456789012";
const myPAN = "ABCDE1234F";
console.log(`Is Aadhaar Valid? ${GovernmentID.validateAadhaar(myAadhaar)}`);
console.log(`Is PAN Valid? ${GovernmentID.validatePAN(myPAN)}`);
// Accessing the nested namespace
const billAmount = 1000;
const tax = GovernmentID.Tax.calculateGST(billAmount);
console.log(`GST on ₹${billAmount} is ₹${tax}`);
// ERROR DEMO:
// console.log(GovernmentID.aadhaarLength);
// The line above will fail because 'aadhaarLength' was not exported!