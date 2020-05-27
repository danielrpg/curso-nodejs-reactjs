const colors = require("colors");

let employees = [
  {
    id: 1,
    name: "Daniel",
  },
  {
    id: 2,
    name: "Jose",
  },
  {
    id: 3,
    name: "Juan",
  },
];

let salaries = [
  {
    id_employee: 1,
    salary: 1000,
  },
  {
    id_employee: 2,
    salary: 2000,
  },
];

//console.log(employees);
//console.log(salaries);

let getEmployee = (id, callback) => {
  let employeeDB = employees.find((employee) => employee.id === id);
  // employeeDB === null ERROR
  if (!employeeDB) {
    callback(`Employee doesn't exists: ${id}`);
  } else {
    callback(null, employeeDB);
  }
};

// getEmployee(1, (err, employee) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(employee);
// });

let getSalary = (id, callback) => {
  let employeeDB = employees.find((employee) => employee.id === id);

  if (!employeeDB) {
    callback(`This employee doesn't exists: ${id}`);
  } else {
    let salaryDB = salaries.find(
      (salary) => salary.id_employee === employeeDB.id
    );

    let response = {
      employee_name: employeeDB.name,
      salary_value: salaryDB.salary,
    };

    if (!salaryDB) {
      callback(`This employee hasn't salary ${id}`);
    } else {
      callback(null, response);
    }
  }
};

getSalary(1, (err, response) => {
  if (err) {
    return console.log(err.red);
  }
  console.log(`>>>>>> Employee: ${response.employee_name} <<<<<<<`.green);
  console.log(`>>>>>> Salary: $${response.salary_value} <<<<<<<`.yellow);
});
