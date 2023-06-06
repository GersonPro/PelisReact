const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

app.use(cors());

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado.');

  socket.on('new-message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
    io.emit('new-message', message);
  });
});

http.listen(3001, () => {
  console.log('Servidor de chat en tiempo real escuchando en el puerto 3001');
});
