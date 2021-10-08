const express = require('express');
const app=new express();
const http = require('http');
const expressServer=http.createServer(app);



app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/socket-combine-chat-app/index.html');
} )

expressServer.listen(3000,()=>{
    console.log("server running @3000")
})