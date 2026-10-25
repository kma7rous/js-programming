console.log("Test Started");

try {
console.log(result);
} catch (e) {
    console.log("An error occurred: " + e.message);
}


console.log("Test Ended");
console.log("=============");

throw new Error("This is a custom error message.");


