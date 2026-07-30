class Student1 {
    constructor(
        public id: number,
        public name: string,
        public course: string
    ) {}

    display(): void {
        console.log("Student Details");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
}
const s1 = new Student1(511, "Deekshitha", "AI&DS");
s1.display();