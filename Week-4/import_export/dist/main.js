"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing the Ticket class to use it
const TicketLogic_js_1 = require("./TicketLogic.js");
// 1. Create a passenger object based on the imported interface
const traveler = {
    name: "Suresh",
    age: 45,
    berthPreference: "Upper"
};
// 2. Initialize the Ticket class
const myTicket = new TicketLogic_js_1.Ticket(traveler, 1000, 12326);
// 3. Execute the logic
myTicket.printTicket();
