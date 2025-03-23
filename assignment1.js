// Task 1: Declaring variables for student information
let studentName;
let studentAge;
let studentGrade;
let isPresent;

// Task 2: Assigning sample values
studentName = "Alice";
studentAge = 15;
studentGrade = 10;
isPresent = true;

// Task 3: Displaying student information
console.log("Student 1:");
console.log("--------");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Grade:", studentGrade);
console.log("Present:", isPresent);

// Alternative approach using template literals
console.log(`
Student Details:
-----------------
Name: ${studentName}
Age: ${studentAge}
Grade: ${studentGrade}
Attendance: ${isPresent ? 'Present' : 'Absent'}
`);

// You can also create multiple students using objects
const student = {
    name: "Alice",
    age: 15,
    grade: 10,
    isPresent: true
};

const student2 ={
    name: "Bob",
    age: 16,
    grade: 11,
    isPresent: false
}

// Display object information
console.log("Student Object Information:");
console.log(student);
console.log(student2);
