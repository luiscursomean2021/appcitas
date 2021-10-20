const express = require('express');
const cors = require('cors');
// const dbconfig = require('./database/db');
const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log("Funciona en /");
    res.send("Server On");
});

//Creación y puesta a la escucha del server del chat
const http = require('http');
app.set("port", port);
var server = http.createServer(app);
//Hay que anadir el cors
var io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET","POST","PUT","DELETE"],
        credentials: true
    }
});
io.on("connection", (socket) => {
    socket.on("join", (data) => {
        socket.join(data.room);
        io.emit("new user joined", {user:data.user, message:"has joined room."});
    })
    socket.on("leave", (data) => {
        io.emit("left room", {user:data.user, message:"has left room."});
        socket.leave(data.room);
    });
    socket.on("message", (data) => {
        io.in(data.room).emit("new message", {user:data.user, message:data.message});
    })
});

server.listen(port,
    () => {
        console.log('Servidor Iniciado:  http://localhost:' + port)
    }
);