const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

const updateEmployeeWithKeyAndValue = (employeeObj, key, value) => {
    return {
        ...employeeObj,
        [key]: value
    };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employeeObj, key, value) => {
    employeeObj[key] = value;
    return employeeObj;
};


const deleteFromEmployeeByKey = (employeeObj, key) => {
    const newObj = { ...employeeObj };
    delete newObj[key];
    return newObj;
};

const destructivelyDeleteFromEmployeeByKey = (employeeObj, key) => {
    delete employeeObj[key];
    return employeeObj;
};

console.log("Original employee:", employee);
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
console.log("Updated employee (non-destructive):", updatedEmployee);
console.log("Original employee (not mutated):", employee);
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak Ave");
console.log("Updated employee (destructive):", employee);
const deletedEmployee = deleteFromEmployeeByKey(employee, "name");
console.log("Employee with key deleted (non-destructive):", deletedEmployee);
console.log("Original employee (not mutated):", employee);
destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee with key deleted (destructive):", employee);