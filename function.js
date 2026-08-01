// ## 1. Named Function

// A ** named function** is declared using the `function` keyword with a function name.

// ```javascript
function greet() {
    console.log("Hello!");
}

greet();
// ```

//     ** Explanation:**

// * Has a name(`greet`).
// * Can be called multiple times.
// * Hoisted, so it can be called before its declaration.

// ---

// ## 2. Anonymous Function

// An ** anonymous function** is a function without a name.It is usually assigned to a variable or passed as an argument.

// ```javascript
const greet = function () {
    console.log("Hello!");
};

greet();
// ```

//     ** Explanation:**

// * Has no function name.
// * Commonly used as callback functions.
// * Not hoisted like function declarations.

// ---

// ## 3. Arrow Function(ES6)

// An ** arrow function** provides a shorter syntax for writing functions.

// ```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));
// ```

//     ** Short form:**

//         ```javascript
// const add = (a, b) => a + b;
// ```

//         ** Explanation:**

// * Uses`=>` syntax.
// * Short and easy to write.
// * Does not have its own`this`.

// ---

// ## 4. Callback Function

// A ** callback function** is a function passed as an argument to another function and executed later.

// ```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Goodbye!");
}

greet("John", bye);
// ```

//     ** Output:**

//         ```
// Hello John
// Goodbye!
// ```

//         ** Explanation:**

// * Passed as an argument.
// * Executed after another task finishes.
// * Common in asynchronous programming.

// ---

// ## 5. Higher - Order Function(HOF)

// A ** Higher - Order Function ** is a function that takes another function as an argument or returns a function.

// ```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(5, 4, multiply));
// ```

//     ** Output:**

//         ```
// 20
// ```

//         ** Examples of HOFs:**

// * `map()`
//             * `filter()`
//             * `reduce()`
//             * `forEach()`

// ---

// ## 6. Currying

//     ** Currying ** converts a function with multiple arguments into a sequence of functions, each taking one argument.

// ```javascript
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

console.log(multiply(5)(4));
// ```

//         ** Output:**

//             ```
// 20
// ```

//             ** Arrow Function Version:**

//                 ```javascript
const multiply = a => b => a * b;

console.log(multiply(5)(4));
// ```

//                 ** Explanation:**

// * Breaks functions into smaller functions.
// * Useful for function reuse and partial application.

// ---

// ## 7. IIFE(Immediately Invoked Function Expression)

// An ** IIFE ** executes immediately after it is defined.

// ```javascript
(function () {
    console.log("IIFE executed");
})();


//     ** Arrow Function IIFE:**

//         ```javascript
// (() => {
//   console.log("Arrow IIFE");
// })();
// ```

//         ** Explanation:**

// * Runs only once.
// * Creates a private scope.
// * Prevents global variable pollution.

// ---

// ## 8. Generator Function

// A ** generator function** can pause and resume execution using the `yield` keyword.

// ```javascript
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// ```

//     ** Output:**

//         ```javascript
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
// ```

//         ** Explanation:**

// * Declared using`function*`.
// * Uses`yield` to return values one at a time.
// * Useful for iterators, lazy loading, and handling large datasets.

// ---

// ## Quick Revision Table

//     | Function Type | Purpose |
// | ------------------------------- | ----------------------------------------------------------------------------- |
// | ** Named Function **              | Reusable function with a name.                                                |
// | ** Anonymous Function **          | Function without a name, often assigned to variables or used as callbacks.    |
// | ** Arrow Function **              | Short ES6 syntax; no own`this`.                                              |
// | ** Callback Function **           | Passed to another function and executed later.                                |
// | ** Higher - Order Function(HOF) ** | Takes a function as an argument or returns a function.                        |
// | ** Currying **                    | Converts a multi - argument function into a chain of single - argument functions. |
// | ** IIFE **                        | Executes immediately after it is defined.                                     |
// | ** Generator Function **          | Produces values one at a time using`yield`.                                  |
