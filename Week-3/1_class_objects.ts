class FixedDeposit {
    // 1. Properties (Fields)
    public customerName: string;
    public principalAmount: number;
    public interestRate: number; // Annual rate in %
    public tenureYears: number;
    // 2. Constructor Overloading
    // Signature 1: Default/Standard FD (e.g., standard 1-year tenure)
    constructor(name: string, amount: number);
    // Signature 2: Custom FD with specific tenure and rate
    constructor(name: string, amount: number, rate: number, years: number);
    // Implementation Signature
    constructor(name: string, amount: number, rate?: number, years?: number) {
        this.customerName = name;
        this.principalAmount = amount;
        // Default values if rate and years are not provided
        this.interestRate = rate ?? 6.5;
        this.tenureYears = years ?? 1;
    }
    // 3. Methods
    // Calculates maturity amount using Simple Interest
    public calculateMaturity(): number {
        const interest =
            (this.principalAmount * this.interestRate * this.tenureYears) / 100;
        return this.principalAmount + interest;
    }
    // Displays account summary
    public displayDetails(): void {
        console.log("--- FD Receipt ---");
        console.log(`Customer: ${this.customerName}`);
        console.log(`Principal: ₹${this.principalAmount}`);
        console.log(`Rate: ${this.interestRate}%`);
        console.log(`Tenure: ${this.tenureYears} year(s)`);
        console.log(`Maturity Amount: ₹${this.calculateMaturity()}`);
        console.log("--------------------\n");
    }
}
// --- Using the Class ---
// Scenario A: Using the default constructor logic (Standard FD)
const standardFD = new FixedDeposit("Hansh", 60000);
// Scenario B: Using the overloaded constructor (Senior Citizen FD)
const seniorCitizenFD = new FixedDeposit("Anjali", 100000, 7.5, 3);
// Using properties and methods
standardFD.displayDetails();
seniorCitizenFD.displayDetails();
// Updating a property manually
seniorCitizenFD.principalAmount = 120000;
console.log(
    `Updated Maturity for Anjali: ₹${seniorCitizenFD.calculateMaturity()}`
);