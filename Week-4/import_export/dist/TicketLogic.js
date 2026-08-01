"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
// Importing specific members from other files
const Constants_js_1 = require("./Constants.js");
class Ticket {
    passenger;
    baseFare;
    trainNumber;
    constructor(passenger, baseFare, trainNumber) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.trainNumber = trainNumber;
    }
    // Method to calculate final price including Indian taxes
    calculateFinalFare() {
        const taxAmount = this.baseFare * Constants_js_1.GST_RATE;
        return this.baseFare + taxAmount + Constants_js_1.CONVENIENCE_FEE;
    }
    printTicket() {
        console.log("--- E-Ticket Confirmed ---");
        console.log(`Passenger: ${this.passenger.name} (${this.passenger.age})`);
        console.log(`Train No: ${this.trainNumber}`);
        console.log(`Total Fare: ₹${this.calculateFinalFare()}`);
        console.log("-------------------------");
    }
}
exports.Ticket = Ticket;
