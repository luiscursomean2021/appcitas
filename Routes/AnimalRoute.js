const express = require('express');
const app = express();
const animalRoute = express.Router();
let Animal = require('../Models/Animal');

animalRoute.route().get((req, res) => {
    Animal.find((err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
})