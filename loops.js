// why using loops.js
//Imagine you want to print "Hello" 5 times.
//without loops, you would have to write the same line of code 5 times,
//which is inefficient and not scalable.
//Instead, you can use a loop to repeat the action multiple times with less code.

//without loops
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

//This works, 
// but it becomes difficult if you need to print it 100 or 1,000 times.

//with loops

for (let i = 0; i < 5; i++) {
    console.log("Hello");
} // Output: "Hello" printed 5 times


/*For loop is a control flow statement that allows code to be executed 
 repeatedly based on a given Boolean condition. The for loop is used 
  when the number of iterations is known beforehand.*/

//For loops syntax:

// for (initialization; condition; increment) {
//     // code
// }

//for example:
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

//Sum numbers

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i; // sum = sum + i
}
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// =======================================================

//while Loop 
/**The while loop repeats as long as the condition is true
syntax: 
* while (condition) {
 *   // code
 * }
 */

let count = 0;
while (count < 5) {
    console.log(count); // Output: 0, 1, 2, 3, 4
    count++;
}

//====================================================================

//do while loop
/**The do...while loop is similar to the while loop, 
 * but it guarantees that the code block will be executed at least once*/
//syntax:
let j = 0;
do {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++;
} while (j < 5);

//Even if the condition is false at the start
//The code runs once before the condition is checked.
let num = 10;

do {
    console.log(num);
    num++;
} while (num <= 5)


// =================================================================================

//for...of Loop

//Use for...of to iterate over arrays or other iterable objects

const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}

// ===============================================================================
// Use for...in to iterate over the keys (property names) of an object

const student = {
    name: "John",
    age: 20,
    city: "New York"
};

for (const key in student) {
    console.log(key, student[key]);
}


//infinite loop

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}