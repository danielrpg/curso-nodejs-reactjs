const options = {
  base: {
    demand: true,
    alias: "b",
    describe: "numero base para la multiplicacion",
  },
  limit: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("list", "Print in cli the table", options)
  .command("create", "Print in cli the table", options) // esta es la parte de la ayuda
  .help().argv;

module.exports = {
  argv,
};
