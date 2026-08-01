// We export the interface so the Ticket system knows what a 'Passenger' looks like
export interface Passenger {
    name: string;
    age: number;
    berthPreference?: "Lower" | "Middle" | "Upper"; // Optional property
}