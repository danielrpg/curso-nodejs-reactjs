const colors = require("colors");

let listTable = (base, limit = 10) => {
  console.log("=========================".green);
  console.log(`===== Tabla del ${base} ========`.green);
  console.log("========================".green);

  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`.blue);
  }
};

module.exports = {
  listTable,
};
