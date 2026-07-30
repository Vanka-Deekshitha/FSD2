// 1. Variable Annotations with Telugu Movie Data
let movieTitle: string = "Baahubali: The Beginning";
let releaseYear: number = 2015;
let isBlockbuster: boolean = true;
// 2. Function Parameter and Return Type Annotations
// This function strictly takes a string and a number,
// and must return a string.
function getMovieStatus(title: string, year: number): string {
    return `${title} was a massive hit released in ${year}.`;
}
// 3. Array Annotations (List of strings)
let leadActors: string[] = [
    "Prabhas",
    "Rana Daggubati",
    "Anushka Shetty",
    "Tamannaah"
];
// 4. Using the annotated variables and functions
const summary: string = getMovieStatus(movieTitle, releaseYear);
console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes, Jai Mahishmati!" : "No"}`);
