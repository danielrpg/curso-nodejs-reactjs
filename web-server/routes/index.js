const express = require("express");

const app = express();

app.use(require("./users"));

app.use(require("./posts"));

module.exports = app;
