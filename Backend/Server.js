const express = require('express');
const cors = require('cors');
const dbconfig = require('./database/db');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

//ROUTERS

const animalRoute = require('./Routes/AnimalRoute');
//Conexion a la BBDD
mongoose.Promise = global.Promise;
mongoose
    .connect(dbconfig.db, { useNewUrlParser: true })
    .then(x => console.log(`Conexión correcta con Mongo!! El nombre de la BBDD es: "${x.connections[0].name}"`))
    .catch(err => console.error('Error conectando con Mongo', err))

app.use(cors());
app.use(express.json());

app.use('/animales', animalRoute);

app.get('/', (req, res) => {
    console.log("Funciona en /");
    res.send("Server On");
});

const server = app.listen(port,
    () => {
        console.log('Servidor Iniciado:  http://localhost:' + port)
    }
);

module.exports = server