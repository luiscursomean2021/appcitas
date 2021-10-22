const express = require("express");
const app = express();
const rutas = express.Router();
let Chat = require("../Models/Chat");

rutas.route("/:id_user").get((req, res) => {
    console.log(req.params.id_user);
    Chat.find({id_user:req.params.id_user}, (err, data) => {
        if(err) {
            res.json(err);
        } else {
            console.log(data); //Quiero ver que lleva data
            res.json(data);
        }
    });
});

module.exports = rutas;