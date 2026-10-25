// Create an array of strings and add 10 employee names on it
const employees = [
  "Alice Johnson",
  "Benjamin Smith",
  "Chloe Davis",
  "Daniel Brown",
  "Emma Wilson",
  "Frank Moore",
  "Grace Taylor",
  "Henry Anderson",
  "Isabella Thomas",
  "Jack Martin"
];
// print the array to the console 
console.log(employees);

// set the first employee name to "John Doe"
employees[0] = "John Doe";

console.log("================");

// display all the elements of the array in revered order
for (let i = employees.length - 1; i >= 0; i--) {
  console.log(employees[i]);
}

console.log("================");

let numbers = [100, 200, -300, 400, 500, 50, 60, 70, 80, 90];

// write a program that can diplay the maximum and minimum numbers from the array. don't use any build in sort functiomns
let max = numbers[0];
let min = numbers[0];   

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Maximum:", max);
console.log("Minimum:", min);

console.log("==================");

// write a program that can sort the numbers array in ascending order without using any built-in sort functions
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers);

console.log("==================");
let nums = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7];

// write a program that can remove duplicates from the nums array.
let uniqueNumbers = [];
for (let i = 0; i < nums.length; i++) {
  if (!uniqueNumbers.includes(nums[i])) {
    uniqueNumbers.push(nums[i]);
  }
}
console.log( uniqueNumbers);