// Importing the Ticket class to use it
import { Ticket } from "./TicketLogic";
// 1. Create a passenger object based on the imported interface
const traveler = {
    name: "Suresh",
    age: 45,
    berthPreference: "Upper"
};
// 2. Initialize the Ticket class
const myTicket = new Ticket(traveler, 1000, 12326);
// 3. Execute the logic
myTicket.printTicket();
