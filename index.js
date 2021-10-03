const express=require('express');
const app=express();
const http=require('http');

const expressServer=http.createServer(app);

const {Server}=require('socket.io');
const io=new Server(expressServer);

io.on('connection',(socket)=>{
    console.log( "connection established");

    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
} )



app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

expressServer.listen(3000,()=>{console.log("server is running @3000 .....")})