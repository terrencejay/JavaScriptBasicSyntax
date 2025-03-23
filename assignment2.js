let num1;
let num2;

num1 = 10;
num2 = 5;

// perform operations
console.log("Calculator operation");
console.log("addition: ",num1 + num2);
console.log("subtraction: ", num1 - num2);
console.log("multiplication: ", num1 * num2);
console.log("division: ", num1 / num2);
console.log("modulus: ", num1 % num2);

// explore and update
let x = num1;
console.log("Original x: ", x);
x += 5;
console.log("Add 5: ", x);
x -= 3;
console.log("Subtract 3: ", x);
x *= 2;
console.log("Multiply by 2: ", x);
x /= 4;
console.log("Divide by 4: ", x);

// Comparison operators
console.log("\nComparison operators");
console.log("Is num 1 equal to num 2?", num1 === num2);
console.log("Is num 1 greater than num 2?", num1 > num2);
console.log("Is num 1 less than num 2?", num1 < num2);
console.log("Is num 1 greater than or equal to num 2?", num1 >= num2);
console.log("Is num 1 less than or equal to num 2?", num1 <= num2);
console.log("Is num1 not equal to num 2?", num1 !== num2);

console.log("\nLogical Operations:");
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;
let isInRange = num1 >= 0 && num1 <= 100 && num2 >= 0 && num2 <= 100;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
console.log("Are both numbers in range 0-100?", isInRange);

