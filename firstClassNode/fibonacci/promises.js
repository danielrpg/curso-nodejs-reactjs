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
    id: 1,
    salary: 1000,
  },
  {
    id: 2,
    salary: 2000,
  },
];

let getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let employeeDB = employees.find((employee) => employee.id === id);

    if (!employeeDB) {
      reject(`Employee does not exists ${id}`);
    } else {
      return resolve(employeeDB);
    }
  });
};

// getEmployee(4)
//   .then((employee) => {
//     // result got
//     console.log(employee);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let getSalary = (id) => {
  return new Promise((resolve, reject) => {
    let employeeDB = employees.find((employee) => employee.id === id);
    let salaryDB = salaries.find((salary) => salary.id === employeeDB.id);
    if (!employeeDB) {
      reject(`Employee does not exists ${id}`);
    } else {
      if (!salaryDB) {
        return reject(`Salary does not exists for this employee ${id}`);
      }
      let response = {
        employee_name: employeeDB.name,
        salary_value: salaryDB.salary,
      };
      return resolve(response);
    }
  });
};

getSalary(1)
  .then((response) => {
    console.log(
      `>>>>>>>>>>>>> Employee:${response.employee_name} <<<<<<<<<<<<<<<<<<<<<`
        .green
    );
    console.log(
      `>>>>>>>>>>>>> Salary:$${response.salary_value} <<<<<<<<<<<<<<<<<<<<<`
        .yellow
    );
  })
  .catch((err) => {
    console.log(err.red);
  });
