
let socket = io();

socket.on('connect', () => {
    console.log('conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('usuario desconectado');
})

socket.emit('enviarMensaje', {
    usuario: 'daniel',
    mensaje: 'Hola del cliente'
}, (resp) => {
    console.log('respuesta del servidor', resp);
});


socket.on('enviarMensaje', (res) => {
    console.log(res);
});

