let school = "cydeo";
console.log(school);
console.log(typeof school);

console.log(school.length);
console.log(school.charAt(0));
console.log(school[1]);
console.log(school[school.length-1]);

console.log("===============");

for(let i =0; i < school.length; i ++){
    console.log(school[i]);
}

console.log("===============");

school = school.toLowerCase();
console.log(school);

school = school.toUpperCase();
console.log(school);

console.log("===============");

let expectedResult = "JavaScript";
let actualResult = "JAVASCRIPT";

console.log(expectedResult === actualResult);

console.log("===============");

let str = "python python";
str = str.replace("python", "javascript")
console.log(str);

console.log("===============");

let email = "cydeo@gmail.com";
let domain = email.substring(email.indexOf("@")+1, email.lastIndexOf("."));
console.log(domain);

console.log("===============");

let emplyeeName = "Remsses";
let emplyeeSalary = 250000;

console.log(`I am  ${emplyeeName}, and My Salary is ${emplyeeSalary} use dollar`);

