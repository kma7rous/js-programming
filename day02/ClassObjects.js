/*
Attributes:
    emplyeeName
    salary
methods:
    work()
*/

class Employee {
    constructor(employeeName, salary) {
        this.employeeName = employeeName;
        this.salary = salary;
    }

    work() {
        console.log(`${this.employeeName} is working.`);
    }
}

let employee1 = new Employee("John Doe", 50000);
let employee2 = new Employee("John Smith", 60000);

console.log(employee1.employeeName); // Output: John Doe
console.log(employee1.salary); // Output: 50000

employee1.work(); // Output: John Doe is working.
employee2.work(); // Output: John Smith is working. 

console.log("=============");

