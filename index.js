const employee = {
    name: "Sam",
    streetAddress: "11 broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee1 = { ...employee };
  
    employee1[key] = value;
  
    return employee1;
  }
  
const employee1 = updateEmployeeWithKeyAndValue(
    employee,
    'Sam',
    '11 Broadway',

)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = employee
    
    employee2[key] = value;

    return employee;
}

const employee2 = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    'Sam',
    '12 Broadway',
)

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee};

    delete newEmployee[key];

    return newEmployee;
}

const newEmployee = deleteFromEmployeeByKey(
    employee,
    'name',
)


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee1 = employee

    delete newEmployee1[key];

    return newEmployee1
}

const newEmployee1 = destructivelyDeleteFromEmployeeByKey(
    employee,
    'name'
)