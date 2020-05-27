const express = require("express");

const app = express();

app.use(require("./users"));
//TODO: completar todas las rutas para los posts del usuario
app.use(require("./posts"));

module.exports = app;
