//Task 1 ---> Student Registration Form
console.log("==========Student Register Form==========");

let studentName = prompt("Enter the student Name:");
let age = prompt("Emter your age:");
let department = prompt("enter the department:");
let cgpa = prompt("enter the cgpa:");

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Department:", department);
console.log("CGPA:", cgpa);

//Task 2 ---> Employee Details

let employeeDetails = {
    employeeID: prompt("enter your emp id:"),
    employeeName: prompt("enter your emp name:"),
    employeeDept: prompt("enter your emp dept:"),
    employeeSalary: prompt("enter your emp salary:")
}
console.log("==========Employee Details=============");
console.log(employeeDetails.employeeName);
console.log(employeeDetails.employeeSalary);

//Task 3: Shopping Cart

let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

console.log("===========Shopping Cart============");
console.log(products[0]);
console.log(products[products.length - 1]);
console.log(products.length);

//Task 4 ---> Student Marks

let tamil = 90;
let eng = 70;
let maths = 95;
let science = 100;
let social = 99;

let total = tamil + eng + maths + science + social;
let average = total / 5;

console.log("============Student Marks============")
console.log("Total Marks:", total);
console.log("Average Marks:", average);


//Task 5 ---> Age Checker

console.log("===========Age Checker============")

let voteAge = prompt("enter your age for vote");

if (voteAge >= 18) {
    console.log("Eligible for votes!");
} else {
    console.log("Not eligiable for votes!");
}


//Task 6 ---> Login System

console.log("==========Login System=========");

let user = prompt("Enter username:");
let pass = prompt("Enter password:");

let obj = {
    username: "Mani",
    password: "12345"
};

if (user === obj.username && pass === obj.password) {
    console.log("login success");
} else {
    console.log("invalid");
}


//Task 7 ---> Calculator

console.log("=========Calculator==========");

let a = 10;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Task 8 ---> Electricity Bill

console.log("=========Electricity Bill========")

let customerName = prompt("enter the customer name");
let unitsConsumed = prompt("enter the used unit");
let totalBill = 0;

if (unitsConsumed <= 100) {
    console.log("0-100 units → ₹2/unit");
    totalBill = unitsConsumed * 2;
} else if (unitsConsumed <= 200) {
    console.log("101–200 units → ₹4 / unit");
    totalBill = unitsConsumed * 4;
} else {
    console.log("Above 200 → ₹6 / unit");
    totalBill = unitsConsumed * 6;
}

console.log("Bill Amount : ", totalBill);
console.log("Customer Name : ", customerName);
console.log("Units : ", unitsConsumed);


//Task 9 ---> Employee Salary

console.log("==========Employee Salary==========")

let salary = 20000;
let bonusEmp = 0;

if (salary >= 50000) {
    bonusEmp = 5000;
} else if (salary >= 30000) {
    bonusEmp = 3000
} else {
    bonusEmp = 2000;
}

console.log("gross salary : ", salary + bonusEmp);


//Task 10 ---> Movie Ticket Price

console.log("=========Movie Ticket Price==========")

let ticketPrice = 250;
let count = 3;
let totalPrice = ticketPrice * count;

console.log("Total Amount: ", totalPrice);


//Task 11 ---> Product Discount

console.log("===========Product Discount==========")

let productName = "laptop";
let productPrice = 50000;
let totalDiscount = 0;
if (productPrice > 5000) {
    console.log("price above ₹5000 → 20% Discount");
    totalDiscount = productPrice * 20 / 100

} else {
    console.log("Otherwise → 10 % Discount");
    totalDiscount = productPrice * 10 / 100
}
let finalPrice = productPrice - totalDiscount;
console.log("Original price : ", productPrice);
console.log("Discount : ", totalDiscount);
console.log("final price : ", finalPrice);


//Task 12 ---> Function Practice

console.log("=========Function Practice==========")

function studentDetails(name, dept, cgpa) {
    console.log("Student Name : ", name);
    console.log("Student Department : ", dept);
    console.log("Student CGPA : ", cgpa);
}

studentDetails("mani", "IT", 7);


//Task 13 ---> Bank Balance

console.log("=========Bank Balance==========")

function IOB(acNAme, curBal, withdraw) {
    let remainingBal = curBal - withdraw;
    console.log("Remaining Balance : ", remainingBal);
}
IOB("mani", 35000, 3900);


//Task 14 ---> Mobile Recharge

console.log("=========Mobile Recharge==========")

function mobile(mobnum, rechargeAmnt) {
    if (mobnum === 8526538112 && rechargeAmnt > 0) {
        console.log("Recharge Successful");
    } else {
        console.log("Recharge unSuccessful");
    }
    console.log("Mobile Number : ", mobnum);
    console.log("Recharge Amount : ", rechargeAmnt);


}

mobile(Number(prompt("enter mobileNum : ")), Number(prompt("enter RechargeAmnt: ")));


//Task 15: Restaurant Bill

function restaurant(foodName, quantity, priceRes) {
    console.log("=======invoice========");
    console.log("Food Name : ", foodName);
    console.log("Quantity : ", quantity);
    let totalBill = quantity * priceRes;
    console.log("Total Amnt : ", totalBill);
}
restaurant(prompt("enter Food Name :"), prompt("enter quantity:"), prompt("entert price"));


//Mini project 

console.log("=======Mini project========");

//Add Employee Details
let employee = {
    name: "Manikandan M",
    id: "stk-2026-4016",
    salary: 20000,
    experience: 2,
    skills: ["java", "pyhhon", "aws"]
};
let bonusSal = 0;

//Display Employee Details
function displayEmployee() {
    console.log("=============Employee Details==============");
    console.log("Name:", employee.name);
    console.log("ID:", employee.id);
    console.log("Skills:", employee.skills);
}

//Calculate Salary
function calculateSalary() {
    if (employee.salary >= 50000) {
        bonusSal = 5000
    }
    else {
        bonusSal = 3000;
    }
    let totalSalary = employee.salary + bonusSal;
    console.log("Total Salary: $" + totalSalary);
}

//Check Employee Experience (using if...else)
function checkExperience() {
    if (employee.experience >= 5 && employee.salary >= 40000) {
        console.log("senior software developer");
    } else if (employee.experience >= 3 && employee.salary >= 25000) {
        console.log("software developer");
    } else {
        console.log("Fresher Employee");
    }
}

//update employee
function addEmployee(name, id, salary, experience, skills) {
    employee.name = name;
    employee.id = id;
    employee.salary = salary;
    employee.experience = experience;
    employee.skills = skills;

    console.log("Employee details updated successfully!");
}

addEmployee("surya", 102, 40000, 6, ["javaScript", "react", "node.js"]);
displayEmployee();
calculateSalary();
checkExperience();
