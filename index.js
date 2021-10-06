const express = require('express');
const app = new express();

const http = require('http');
const expressServer = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);

io.on('connection', (socket) => {
    console.log('connected');
    setTimeout(() => {
        socket.send(('hello socket learning'))
    }, 500)

    // setInterval(() => {
    //     let date = new Date();
    //     let time = date.getTime();
    //     socket.send(time)
    // }, 10000)

    setInterval(() => {
        let date = new Date();
        let time = date.getTime();
        socket.emit('customEvent', time)
    }, 1000)

    socket.on('disconnect', () => {
        console.log("disconnected")
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

expressServer.listen(3000, () => {
    console.log('listinging to port 3000')
})





























// const express=require('express');
// const app=express();
// const http=require('http');

// const expressServer=http.createServer(app);

// const {Server}=require('socket.io');
// const io=new Server(expressServer);

// io.on('connection',(socket)=>{
//     console.log( "connection established");

//     setTimeout(()=>{
//         socket.send(('hello bangladesh from socket'))
//     },8000)

//     setInterval(()=>{
//         let date=new Date();
//         let time=date.getTime();
//         socket.send(time)
//     },500)

//     socket.on('disconnect',()=>{
//         console.log('disconnected')
//     })
// } )
// app.get('/', (req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })

// expressServer.listen(3000,()=>console.log("server listening 3000"))



















