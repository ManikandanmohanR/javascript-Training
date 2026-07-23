//Type Conversion in JavaScript 
//Implicit Type Conversion (Type Coercion) – JavaScript converts the type automatically


//Number + String

let num = 10 + "20";
console.log(num); // Output: "1020"
console.log(typeof num); // Output: "string" 

//String + Number

let str = "10" + 20;
console.log(str); // Output: "1020"
console.log(typeof str); // Output: "string"


//String - Number
let strNum = "10" - 5;
console.log(strNum); // Output: 5-5
console.log(typeof strNum); // Output: "number"

//String * Number
let strNumMul = "10" * 2;
console.log(strNumMul); // Output: 10 * 2
console.log(typeof strNumMul); // Output: "number"

//String / Number
let strNumDiv = "10" / 2;
console.log(strNumDiv); // Output: 10 / 2
console.log(typeof strNumDiv); // Output: "number"

//Boolean + Number
let boolNum = true + 1;
console.log(boolNum); // Output: 1+1
console.log(typeof boolNum); // Output: "number"

//false + Number
let falseNum = false + 1;
console.log(falseNum); // Output: 0+1
console.log(typeof falseNum); // Output: "number"

//null + Number
let nullNum = null + 1;
console.log(nullNum); // Output: 0+1
console.log(typeof nullNum); // Output: "number"

//undefined + Number
let undefinedNum = undefined + 1;
console.log(undefinedNum); // Output: NaN
console.log(typeof undefinedNum); // Output: "number"

/**
 * | Expression      | Output  | Reason                                   |
| --------------- | ------- | ---------------------------------------- |
| `"10" + 5`      | `"105"` | Number becomes string                    |
| `"10" - 5`      | `5`     | String becomes number                    |
| `"10" * 2`      | `20`    | String becomes number                    |
| `true + 2`      | `3`     | `true` becomes `1`                       |
| `false + 2`     | `2`     | `false` becomes `0`                      |
| `null + 5`      | `5`     | `null` becomes `0`                       |
| `undefined + 5` | `NaN`   | `undefined` cannot become a valid number |

 */


// ========================================================================================================

//explicit Type Conversion (Type Casting) – JavaScript converts the type explicitly using built-in functions

//Number() – Converts a value to a number
//string to number
let strToNum = "10";
let numConverted = Number(strToNum); // Convert string to number
console.log(numConverted); // Output: 10
console.log(typeof numConverted); // Output: "number"

//Invalid Number
let invalidNum = "abc";
let invalidConverted = Number(invalidNum); // Convert invalid string to number
console.log(invalidConverted); // Output: NaN
console.log(typeof invalidConverted); // Output: "number"


//string 
let numToStr = 10;
let strConverted = String(numToStr); // Convert number to string
console.log(strConverted); // Output: "10"
console.log(typeof strConverted); // Output: "string"

//Boolean()
let boolToNum = true;
let boolConverted = Number(boolToNum); // Convert boolean to number
console.log(boolConverted); // Output: 1
console.log(typeof boolConverted); // Output: "number"

let boolToNumFalse = false;
let boolConvertedFalse = Number(boolToNumFalse); // Convert boolean to number
console.log(boolConvertedFalse); // Output: 0
console.log(typeof boolConvertedFalse); // Output: "number"


console.log(Boolean("")); // Output: false 0
console.log(Boolean(" ")); // Output: true  1
console.log(Boolean("hello")); // Output: true  1
console.log(Boolean(0)); // Output: false 0


//parseInt() – Converts a string to an integer

let strToInt = "10.5";
let intConverted = parseInt(strToInt); // Convert string to integer
console.log(intConverted); // Output: 10
console.log(typeof intConverted); // Output: "number"

//parseFloat() – Converts a string to a floating-point number
let strToFloat = "10.5kg";
let floatConverted = parseFloat(strToFloat); // Convert string to float
console.log(floatConverted); // Output: 10.5
console.log(typeof floatConverted); // Output: "number"

//Common Explicit Conversion Examples
console.log(Number("100"));     // 100
console.log(String(100));        // "100"
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(parseInt("25px"));   // 25
console.log(parseFloat("9.8kg"));// 9.8

//Implicit vs Explicit Conversion
/**
 * | Feature          | Implicit Conversion      | Explicit Conversion                                               |
| ---------------- | ------------------------ | ----------------------------------------------------------------- |
| Who performs it? | JavaScript automatically | Programmer manually                                               |
| Control          | Less control             | Full control                                                      |
| Methods used     | Automatic coercion       | `Number()`, `String()`, `Boolean()`, `parseInt()`, `parseFloat()` |
| Example          | `"10" + 5` → `"105"`     | `Number("10")` → `10`                                             |

 */