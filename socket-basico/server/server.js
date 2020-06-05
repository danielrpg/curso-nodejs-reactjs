const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const app = express();

let server = http.createServer(app); //add express as part of the application
const PORT = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// server socket io is here
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(PORT, (err) => {
    if(err) throw new Error(err);
    console.log(`Servidor esta corriendo en el puerto ${PORT}`);
});

