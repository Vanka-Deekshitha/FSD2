// Importing specific members from other files
import { GST_RATE, CONVENIENCE_FEE } from "./Constants.js";
import { Passenger } from "./Passenger.js";
export class Ticket {
    constructor(
        public passenger: Passenger,
        private baseFare: number,
        public trainNumber: number
    ) {}
    // Method to calculate final price including Indian taxes
    public calculateFinalFare(): number {
        const taxAmount = this.baseFare * GST_RATE;
        return this.baseFare + taxAmount + CONVENIENCE_FEE;
    }
    public printTicket(): void {
        console.log("--- E-Ticket Confirmed ---");
        console.log(`Passenger: ${this.passenger.name} (${this.passenger.age})`);
        console.log(`Train No: ${this.trainNumber}`);
        console.log(`Total Fare: ₹${this.calculateFinalFare()}`);
        console.log("-------------------------");
    }
}