class Student {
    readonly studentId: number;
    name: string;

    constructor(id: number, name: string) {
        this.studentId = id;
        this.name = name;
    }

    display() {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);
    }
}
const student = new Student(1001, "Krishna");
student.display();
// student.studentId = 2000; // Error