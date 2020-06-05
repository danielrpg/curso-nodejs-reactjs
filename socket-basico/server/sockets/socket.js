const { io } = require('../server');

io.on('connection', client => {
    console.log(`Usuario conectado`);

    client.on('disconnect', ()=> {
        console.log(`usuario se ha desconectado`);
    })

    // client.emit('enviarMensaje', {
    //     usuario: 'Admin',
    //     mensaje: 'Bienvenido a la aplicacion'
    // });

    client.on('enviarMensaje', (res, callback) => {
        console.log(res);
        client.broadcast.emit('enviarMensaje', res);

        if(res.usuario) {
            callback({resp: 'Todo salio bien'})
        } else {
            callback({resp: 'TODO salio mal'});
        }
    })
});