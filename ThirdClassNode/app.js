const argv = require("./config/yargs").argv;
const { listTable, createFile } = require("./multiply/multiply");

let command = argv._[0];

switch (command) {
  case "list":
    listTable(argv.base, argv.limit);
    break;
  case "create":
    createFile(argv.base, argv.limit).then((file) => {
      console.log(`Archivo creado: ${file}`);
    }).catch((err) => {
      console.log(err);
    });
    break;
  default:
    console.log("no se encuentra el comando");
}
