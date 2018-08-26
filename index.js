const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);



app.use(express.static(__dirname + '/public/'));


app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/index.html');
});


http.listen(3000, () => {
  console.log('Listening on *:3000');
});

io.on('connection', socket => {
  console.log('User connected:', socket.id);

  socket.on('disconnect',  () => {
    console.log('User disconnected')
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });


});
