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
  .help().argv;

module.exports = {
  argv,
};
