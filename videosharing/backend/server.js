// require("dotenv").config({ path: "/Users/owaisazmi/Desktop/melted-group-7444/Backend/.env" });
require("dotenv").config();
const express = require('express');
const {Server} = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express()
app.use(cors({
    origin : '*'
}))

const httpServer =  http.createServer(app)

app.get("/start" , (req,res) => {
    res.send("Welcome To WrokDesk Video Server")
})

httpServer.listen(process.env.port , () => {
    console.log(`Server started at `+process.env.port);
})

const io = new Server(httpServer , {
    cors : {
        origin : '*'
    }
})

io.on('connection' , (socket) => {

    socket.on('join-room' , (RoomID , userID) => {
        // const {RoomID,userID} = data
        console.log(RoomID , userID);
        socket.join(RoomID)
        socket.to(RoomID).emit('user-join' , userID)

        socket.on('disconnect' , () => {
            socket.to(RoomID).emit('user-disconnected', userID)
        })
    })

})