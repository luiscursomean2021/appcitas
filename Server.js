const express = require('express');
const cors = require('cors');
const dbconfig = require('./database/db');
const app = express();
const port = 8080;

//ROUTERS

const animalRoute = require('./Routes/AnimalRoute');

app.use(cors());
app.use(express.json());

app.use('/animales', animal);

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