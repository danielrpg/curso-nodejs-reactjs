const fs = require("fs");
const colors = require("colors");

// own modules

let listTable = (base, limit = 10) => {
  console.log("=========================".green);
  console.log(`===== Tabla del ${base} ========`.green);
  console.log("========================".green);

  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`.blue);
  }
};

const createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";

    if (!Number(base)) {
      reject(`El valor de ${base} no es correcto`);
    }

    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }

    // guardar la informacion
    fs.writeFile(`tables/table-${base}-al-${limit}.txt`, data, (err) => {
      if (err) reject(err);
      resolve(`table-${base}.txt`);
    });
  });
};

module.exports = {
  listTable,
  createFile,
};
