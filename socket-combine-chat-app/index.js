const express = require('express');
const app=new express();
const http = require('http');
const expressServer=http.createServer(app);

//SOCKET CONNECTION TO SERVER
const { Server } = require('socket.io');
const io = new Server(expressServer);


io.on('connection', (socket)=>{
   socket.on('chat', function(msg){
       io.emit('chat_transfer',msg)
   })
})



//VIEW PAGE CALLED
app.get('/', (req,res)=>{
     res.sendFile(__dirname+'/index.html')
})

//LISTING PORT
expressServer.listen(3000, ()=>{
    console.log("connected to 3000...");
})