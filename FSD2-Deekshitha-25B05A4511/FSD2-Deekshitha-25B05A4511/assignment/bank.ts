class BankAccount {
    private balance: number;

    constructor(amount: number) {
        this.balance = amount;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Current Balance:", this.balance);
    }
}
const acc = new BankAccount(5000);
acc.deposit(1000);
acc.withdraw(2500);
acc.displayBalance();