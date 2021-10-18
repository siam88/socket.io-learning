const express = require('express');
const app = express();
const http = require('http');

const expressServer = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(expressServer);

io.on('connection', function (socket) {
    console.log("new user connected");

    io.on('disconnect', function () {
        console.log("User disconnected")
    })
})


app.use(express.static('client/build'))



app.get('/express-server',function(req, res){
    res.end("this is backend");
})

expressServer.listen(3001, () => {
    console.log("connected to 3001")
})
