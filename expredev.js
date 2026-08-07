// this if condition is used for the experience developer used 

// let x = prompt("Enter your age");

// let isEligible = x >=18 && x <= 60 ;

// if(isEligible){
//     console.log("You are eligible for voting");
// }else{
//     console.log("You are not eligible for voting");
// }


// function functionName() {
//     let age = prompt("Enter your age");
//     let isEligible1 = age >= 18 && age <= 60;
//     if(isEligible1){
//         console.log("You are eligible for voting");
//     }else{
//         console.log("You are not eligible for voting");
//     }
// }
// functionName();


function functionName1(a, b, callback) {
    let result = a + b;
    console.log("The result is: " + result);
    callback();
}

function functionName2() {
    console.log("This is a callback function");
}

functionName1(5, 10, functionName2);


function functionName3(a, b, callback) {
    let result = a + b;
    return callback(result);
}

function functionName4(result) {
    console.log("The result is: " + result);
}
functionName3(5, 10, functionName4);



function* functionName5() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

// for (let value of functionName5()) {
//     console.log(value);
// }

// let generator = functionName5();
// console.log(generator.next().value); // 1
// console.log(generator.next().value); // 2
// console.log(generator.next().value); // 3
// console.log(generator.next().value); // 4
// console.log(generator.next().value); // undefined

const gen = functionName5();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());



// ==================================================================

// Async/Await and Promises

function asyncFunction2() {
    return new Promise((resolve, reject) => {
        let x = 15;
        if (x > 10) {
            resolve("Success: x is greater than 10");
        } else {
            reject("Error: x is not greater than 10");
        }
    }, 1000)
};

asyncFunction2().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise is settled");
});


setTimeout(() => {
    console.log("This is a setTimeOut function");
}, 1000);

setInterval(() => {
    console.log("hii");

}, 2000);

function asyncFunction1() {
    setTimeout(() => {
        console.log("This is an async function last");
    }, 5000);
}

asyncFunction1();


// const promise = new Promise((resolve, reject) => {
//     let x = 15;

//     if (x > 10) {
//         resolve("Success: x is greater than 10");
//     } else {
//         reject("Error: x is not greater than 10");
//     }
// });
// promise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is settled");
// });


// const asyncFunction = async () => {
//     try {
//         let x = 15;
//         if (x > 10) {
//             return "Success: x is greater than 10";
//         } else {
//             throw new Error("Error: x is not greater than 10");
//         }
//     } catch (error) {
//         throw error;
//     }
// };

// asyncFunction().then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error.message);
// }).finally(() => {
//     console.log("Async function is settled");
// });





const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        console.log("Data fetched from API:", data);
        data.forEach((post) => {
            console.log("Post title:", post.title);
        });
    })
    .catch((error) => {
        console.error("Error fetching data from API:", error);
    }).finally(() => {
        console.log("Fetch operation completed");
    });



