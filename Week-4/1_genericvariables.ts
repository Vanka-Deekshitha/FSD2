// <T> is a placeholder for a 'Type'.
// It means: "I will tell you what type this is when I actually use it."
class Locker<T> {
    private contents: T;
    constructor(initialItem: T) {
        this.contents = initialItem;
    }
    // This method returns the generic type T
    public getItem(): T {
        console.log("Accessing Locker...");
        return this.contents;
    }
    // This method accepts a new item of type T
    public depositItem(newItem: T): void {
        this.contents = newItem;
        console.log("Locker updated successfully.");
    }
}
// 1. Using it for Cash (Number)
// Here, T becomes 'number'
const cashLocker = new Locker<number>(5000);
let cash = cashLocker.getItem();
console.log(`Current Balance: ₹${cash}`);
// 2. Using it for Documents (String)
// Here, T becomes 'string'
const documentLocker = new Locker<string>(
    "Property Papers - Mumbai Flat"
);
console.log(`Stored Document: ${documentLocker.getItem()}`);
// 3. Using it for a Custom Object (Jewellery)
interface Gold {
    weightGrams: number;
    purity: string;
}
const goldLocker = new Locker<Gold>({
    weightGrams: 50,
    purity: "24K"
});
const myGold = goldLocker.getItem();
console.log(`Gold Weight: ${myGold.weightGrams}g`);
console.log(`Gold Purity: ${myGold.purity}`);
// Updating values
cashLocker.depositItem(7000);
console.log(`Updated Balance: ₹${cashLocker.getItem()}`);
documentLocker.depositItem("Passport");
console.log(`Updated Document: ${documentLocker.getItem()}`);
goldLocker.depositItem({
    weightGrams: 100,
    purity: "22K"
});
console.log(goldLocker.getItem());
