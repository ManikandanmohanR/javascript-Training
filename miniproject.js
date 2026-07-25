const STORAGE_KEY = "employeeData";

let employeeData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
];

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employeeData));
}

async function saveToFile() {
    const data = JSON.stringify(employeeData, null, 2);

    if (window.showSaveFilePicker) {
        try {
            const fileHandle = await window.showSaveFilePicker({
                suggestedName: "employees.json",
                types: [{
                    description: "JSON file",
                    accept: { "application/json": [".json"] }
                }]
            });

            const writable = await fileHandle.createWritable();
            await writable.write(data);
            await writable.close();
            console.log("Data saved to JSON file successfully.");
        } catch (error) {
            console.log("Save cancelled or not allowed.");
        }
    } else {
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "employees.json";
        link.click();
        URL.revokeObjectURL(url);
        console.log("Data saved to employees.json");
    }
}

async function startMenu() {
    let choices = "";

    do {
        choices = prompt(
            "Choose an option:\n1. Add Employee\n2. Show Employee Details\n3. Calculate Bonus\n4. Check Attendance\n5. Print Salary\n6. Delete Employee\n7. Save Data to File\n8. Exit"
        );

        if (choices === null) {
            console.log("Program closed.");
            break;
        }

        switch (choices) {
            case "1":
                let newName = prompt("Enter employee name:");
                let newRole = prompt("Enter employee role:");
                let newSalary = Number(prompt("Enter employee salary:"));
                let newAttendance = prompt("Enter attendance (present/leave):");

                employeeData.push({
                    name: newName,
                    role: newRole,
                    salary: newSalary,
                    attendance: newAttendance
                });

                saveToLocalStorage();
                console.log("Employee added successfully");
                console.log(employeeData);
                break;

            case "2":
                console.log("Show Employee Details");
                for (let employee of employeeData) {
                    console.log(`Name: ${employee.name}`);
                    console.log(`Role: ${employee.role}`);
                    console.log(`Salary: ${employee.salary}`);
                }
                break;

            case "3":
                console.log("Calculate Bonus");
                for (let employee of employeeData) {
                    let bonus = 0;
                    if (employee.salary > 50000) {
                        bonus = 10000;
                    } else if (employee.salary > 30000) {
                        bonus = 5000;
                    } else {
                        bonus = 2000;
                    }
                    console.log(`Bonus for ${employee.name}: ${bonus}`);
                }
                break;

            case "4":
                console.log("Check Attendance");
                for (let employee of employeeData) {
                    if (employee.attendance === "present") {
                        console.log(`${employee.name} is working`);
                    } else {
                        console.log(`${employee.name} is leave`);
                    }
                }
                break;

            case "5":
                console.log("Print Salary");
                for (let employee of employeeData) {
                    console.log(`${employee.name} salary is ${employee.salary}`);
                }
                break;

            case "6":
                let deleteName = prompt("Enter employee name to delete:");
                let deleteIndex = employeeData.findIndex(emp => emp.name === deleteName);

                if (deleteIndex !== -1) {
                    employeeData.splice(deleteIndex, 1);
                    saveToLocalStorage();
                    console.log("Employee deleted successfully");
                } else {
                    console.log("Employee not found");
                }
                break;

            case "7":
                await saveToFile();
                break;

            case "8":
                console.log("Exit");
                break;

            default:
                console.log("Invalid Choice");
        }
    } while (choices !== "8");
}

startMenu();