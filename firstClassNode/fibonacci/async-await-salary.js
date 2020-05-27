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

let getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let employeeDB = employees.find((employee) => employee.id === id);

    if (!employeeDB) {
      return reject(`Employee does not exists ${id}`);
    }
    setTimeout(() => {
      resolve(employeeDB);
    }, 3000);
  });
};

let getSalary = (id_employee) => {
  return new Promise((resolve, reject) => {
    let salaryDB = salaries.find(
      (salary) => salary.id_employee === id_employee
    );

    if (!salaryDB) {
      return reject(`Salary does not exists for this employee ${id_employee}`);
    }
    setTimeout(() => {
      resolve(salaryDB.salary);
    }, 4000);
  });
};

let getSalaryByEmployeeID = async (id) => {
  let employee = await getEmployee(id);
  let salary = await getSalary(employee.id);
  return `>>>>>>>>>>>>>>>>>>> Employee: ${employee.name} --- Salary: $${salary} <<<<<<<<<<<<<<<`;
};

getSalaryByEmployeeID(1)
  .then((reponse) => console.log(reponse.yellow))
  .catch((err) => console.log(err.red));
