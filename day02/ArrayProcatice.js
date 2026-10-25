let elements = ['Java', 1, 2, true, false, "Python" ]
console.log(elements);

console.log("=================");

let students = ["Jack", "ALi", "Muhtar"]
console.log(students);

for(let i=0; i<students.length-1; i++){
    console.log(students[i]);
}

console.log("=================");


let employees = ["Jack", "ALi", "Muhtar", "Jimmy"]
console.log(employees.length);
console.log(employees);

employees[0] = "Chris";
console.log(employees);

console.log("=================");

employees.push("Isaac")
console.log(employees);

employees.unshift("Dani")
console.log(employees);

employees.shift("Isaac")
console.log(employees);