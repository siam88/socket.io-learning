const express = require('express');
const app=new express();
const http = require('http');
const expressServer=http.createServer(app);

//SOCKET CONNECTION TO SERVER
const { Server } = require('socket.io');
const io = new Server(expressServer);

//CREATING NAMESPACE


//GROUPING UNDER BUYNAMESPACE
let buyNamespace=io.of("/buy");
buyNamespace.on('connection',(socket)=>{
    buyNamespace.emit("myCustomEvent","msg from buy connection");
})

//GROUPING UNDER SELLNAMESPACE
let sellNamespace=io.of("/sell");
sellNamespace.on('connection',()=>{
    sellNamespace.emit("myCustomEvent","msg from buy connection")
})



//VIEW PAGE CALLED
app.get('/', (req,res)=>{
     res.sendFile(__dirname+'/index.html')
})

//LISTING PORT
expressServer.listen(3000, ()=>{
    console.log("connected to 3000...");
})