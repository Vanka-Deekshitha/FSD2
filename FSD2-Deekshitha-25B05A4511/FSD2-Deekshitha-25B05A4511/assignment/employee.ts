class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, dept: string) {
        this.name = name;
        this.salary = salary;
        this.department = dept;
    }

    showSalary() {
        console.log("Salary:", this.salary);
    }
}

class Manager extends Employee {
    displayDepartment() {
        console.log("Department:", this.department);
    }
}

const emp = new Employee("Vishnu", 50000, "HR");
console.log(emp.name);
emp.showSalary();
const mgr = new Manager("Deekshitha", 80000, "IT");
mgr.displayDepartment();