class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}


class Student extends Person {
 // name, age, grade

 constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
 }

 // study, eat
 study() {
    console.log(`${this.name} is studying.`);
}
}

class Teacher extends Person {

 // name, age, salary
 constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
 }
 // teach, eat
 teach() {
    console.log(`${this.name} is teaching.`);
 }

}


let student = new Student("Alice", 20, "High School");
console.log(student); // Output: Alice
student.eat(); // Output: Alice is eating.
student.study(); // Output: Alice is studying.

let teacher = new Teacher("Mr. Smith", 35, 50000);
console.log(teacher); // Output: Mr. Smith
teacher.eat();  // Output: Mr. Smith is eating.
teacher.teach(); // Output: Mr. Smith is teaching.

