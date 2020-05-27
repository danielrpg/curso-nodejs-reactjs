const argv = require("./config/yargs").argv;
const { listTable } = require("./multiply/multiply");

let command = argv._[0];
switch (command) {
  case "list":
    listTable(argv.base, argv.limit);
    break;
  default:
    console.log("no se encuentra el comando");
}
