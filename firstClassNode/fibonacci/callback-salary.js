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

let getSalary = (id, callback) => {
  let employeeDB = employees.find((employee) => employee.id === id);

  if (!employeeDB) {
    callback(`This employee doesn't exists: ${id}`);
  } else {
    let salaryDB = salaries.find(
      (salary) => salary.id_employee === employeeDB.id
    );

    if (!salaryDB) {
      callback(`This employee hasn't salary ${id}`);
    } else {
      let response = {
        employee_name: employeeDB.name,
        salary_value: salaryDB.salary,
      };
      callback(null, response);
    }
  }
};

getSalary(1, (err, response) => {
  if (err) {
    return console.log(err.red);
  }
  console.log(`>>>>>> Employee: ${response.employee_name} <<<<<<<`.yellow);
  console.log(`>>>>>> Salary: $${response.salary_value} <<<<<<<`.yellow);
});
