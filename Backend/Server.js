const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dbconfig = require('./database/db');
const jwt = require('jsonwebtoken');
//configu auth login
const configs = require('./config/config');
//conexión a la BBDD
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.db, { useNewUrlParser: true }).then(() => {
    //respuesta
    console.log("BBDD conexión correcta!!!");
}, error => {
    console.log(error);
});
//generamos fichero de rutas de express con el api de peliculas
//const peliculasRoute = require('./routes/peliculas.route');
const usuariosRoute = require('./routes/UserRoute');
const animalesRoute = require('./routes/AnimalRoute');
const Usuario = require('./Models/User');
const puertoApp = 4000;
const puertoChat = 4005;
const app = express();
app.use(cors());
app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.db, { useNewUrlParser: true }).then(() => {
    //respuesta
    console.log("BBDD conexión correcta!!!");
}, error => {
    console.log(error);
});

//Creación y puesta a la escucha del server del chat
const http = require('http');
app.set("port", puertoChat);
var server = http.createServer(app);
//Hay que anadir el cors
var io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
});
io.on("connection", (socket) => {
    socket.on("join", (data) => {
        socket.join(data.room);
        io.emit("new user joined", { user: data.user, message: "has joined room." });
    })
    socket.on("leave", (data) => {
        io.emit("left room", { user: data.user, message: "has left room." });
        socket.leave(data.room);
    });
    socket.on("message", (data) => {
        io.in(data.room).emit("new message", { user: data.user, message: data.message });
    })
});

server.listen(puertoChat,
    () => {
        console.log('Servidor Chat Iniciado:  http://localhost:' + puertoChat)
    }
);

function filtroAutorizacion() { //function autorizacion  que es lo mismo que el verify pero lo hago para implementarlo en el 1 get de datos / linea 100
    return (req, res, next) => {
        console.log("Estamos en la función filtroAutorizacion()");
        let tokenRequest = req.headers['authorization']; //Bearer XXXXXXXX

        if (tokenRequest && tokenRequest.indexOf("Bearer") === 0) {
            tokenRequest = tokenRequest.replace(/^Bearer\s+/, "");

            jwt.verify(tokenRequest, configs.claveSecreta, (err, payload) => {
                if (err) {
                    res.json({ msg: "Token inválido", error: err });
                } else {
                    //res.json({msg: "Token válido", datosSecretos: payload});
                    res.seguridad = payload;
                    next();
                }
            })
        } else {
            res.json({ msg: "Falta el token" });
        }
    }
};

app.post('/login', async(req, res) => { //post login
    var user = req.body;
    Usuario.findOne({ username: user.username }, async(err, data) => { //hago find one con parametros username que sea el que viene por el model user
        if (!data) {
            console.log(err)
            return res.status(400).json({ msg: "no existe usuario" }); //si no existe saco mensaje error
        } else {
            //console.log(data);
            let claveChek = await bcrypt.compare(user.password, data.password); //comparo la clave que tiene (haciendo un decript(compare))
            if (claveChek) { //si es afirmativo esto haz un payload y el token envia todos los datos por token
                let payload = { username: data.username, id: data._id, userType: data.userType } //envio datos como id username y tipo usuario
                let token = jwt.sign(payload, configs.claveSecreta, { expiresIn: 1440 }); // creo el token con el payload el configs secreto y el tiempo 30mins
                res.json({ msg: "conseguido funciona", token: token }) //saco mensajto de que funciona
                    //console.log(data);
            } else {
                res.status(401).json("la contraseña no es valida"); //sino pass no valida
            }
        }
    });
});

app.post('/register', async(req, res) => {
    const salt = await bcrypt.genSalt(12); //encripto en formato 12 quie es el generico
    var newuser = new Usuario(req.body); //new schema desde req.body no duplicado
    //  console.log(newuser);
    const passwordHas = await bcrypt.hash(newuser.password, salt); //hash sin sync por await metodfo async convierto la clave
    newuser.password = passwordHas; // paso a la variable de arriba new user la nueva clave hasheada
    //  console.log(newuser);
    newuser.save(function(err, savedUser) { //guardo los datos del usuario
        if (err) {
            console.log(err);
            return res.status(400).send();
        }
        return res.status(200).json({ msg: "registrado" }); //saco mensajito de todo ok
    })
});


app.use("/usuarios", usuariosRoute);
app.use("/animales", animalesRoute);


app.get('/', filtroAutorizacion(), (req, res) => { //creo metodo que comprobara siempre la funcion creada arriba
    res.send("Hello world !!!!!!!!!!!");
});

app.get('/verifyToken', (req, res) => { //creo metodo para comrpobar el token 
    let tokenRequest = req.headers['authorization']; // llamo que el headers se llamara authorization 
    if (tokenRequest && tokenRequest.indexOf("Bearer") === 0) {
        tokenRequest = tokenRequest.replace(/^Bearer\s+/, "");

        jwt.verify(tokenRequest, configs.claveSecreta, (err, payload) => { //comprobacion del token y la clave secreta
            if (err) {
                res.json({ msg: "Token inválido", error: err }); //cincorrecto
            } else {
                res.json({ msg: "Token válido", datosSecretos: payload }); //correcto paso datos payload
            }
        })
    } else {
        res.json({ msg: "Falta el token" });
    }
})

app.get('/', (req, res) => {
    console.log("Holaaa estamos en /");
    res.send("Hello world!!!!!! Server Citas!!!!!");
});

const servidor = app.listen(puertoApp, () => {
    console.log('Servidor App Iniciado:  http://localhost:' + puertoApp);
})

/*
const port = 4000;
const server = app.listen(port, () => {
    console.log('Servidor escuchando en el puerto --> '+ port);
})*/