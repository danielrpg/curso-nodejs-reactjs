const axios = require("axios");

const getWheater = async (address) => {
  let res = axios.get(
    "api.openweathermap.org/data/2.5/weather?q=${address}&unit=metric&appid=d8fd4b26c3e2bbb19145890ff671aedc;",
  );

  return res.data.main.temp;
};

module.exports = {
  getWheater,
};
