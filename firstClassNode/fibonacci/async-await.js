const colors = require("colors");
let getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Daniel");
    }, 3000);
  });
};

let greet = async () => {
  let name = await getName();
  return `Hola ${name}`;
};

greet()
  .then((message) => console.log(message.yellow))
  .catch((err) => console.log(err.red));
