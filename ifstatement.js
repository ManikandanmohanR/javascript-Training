//if condition 
//if Statement
//The if statement executes a block of code only if a condition is true.

/**
 * syntax
 if (condition) {
    // code to execute if condition is true
}
 */

let age = prompt("enter your age:");

if (age >= 18) {
    console.log("eligible for vote");

}

//2. if...else Statement
//Executes one block if the condition is true, otherwise executes another block.

/**
 * syntax
 if (condition) {
    // true block
} else {
    // false block
}
 */

let num = prompt("Enter the number:");
if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

//3. if...else if...else Statement

/**
 * syntax
 if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}
 */

let marks = prompt("enter you marks:");

if (marks >= 90) {
    console.log("grade A");
} else if (marks >= 80) {
    console.log("grade B");
} else if (marks >= 70) {
    console.log("grade C");

} else if (marks >= 60) {
    console.log("grade D");

} else if (marks >= 50) {
    console.log("Grade E");

} else {
    console.log("Fail");

}


//4. switch Statement

//Used when comparing one value against many possible value

// Syntax

// switch (expression) {
//     case value1:
//         // code
//         break;

//     case value2:
//         // code
//         break;

//     default:
//         // code
// }

let day = Number(prompt("enter number between one to seven days"));

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("thurday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid Day");
}