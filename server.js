const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res)=> {
  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});


http.listen(port, () => {
  console.log(`Listening on *:${port}`);
});

io.on('connection', socket => {
  console.log('Server:connected:', socket.id);

  socket.on('disconnect',  () => {
    console.log('User disconnected')
  });

  socket.on('send message to server', function(msg){
    // socket.broadcast.emit('chat message', msg);
    console.log('this is msg:', msg)
    io.emit('recieve message from server', {msg, userId: socket.id});
  });


});
