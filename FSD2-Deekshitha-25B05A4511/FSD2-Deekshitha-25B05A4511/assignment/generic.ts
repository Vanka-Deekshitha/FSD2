class Box<T> {
    private value: T;

    constructor(data: T) {
        this.value = data;
    }

    display(): void {
        console.log("Stored Value:", this.value);
    }
}
const numberBox = new Box<number>(500);
numberBox.display();

const stringBox = new Box<string>("Hello TypeScript");
stringBox.display();

const booleanBox = new Box<boolean>(true);
booleanBox.display();