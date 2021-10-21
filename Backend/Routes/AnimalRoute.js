const express = require('express');
const app = express();
const animalRoute = express.Router();
let Animal = require('../Models/Animal');

animalRoute.route('/').get((req, res) => {
    Animal.find((err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
})


animalRoute.route('/:id').get((req, res) => {
    Animal.findById(req.params.id, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
})

animalRoute.route('/').post((req, res) => {
    Animal.create(req.body, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
})
animalRoute.route('/:id').put((req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
})
animalRoute.route('/:id').delete((req, res) => {
    Animal.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
})

module.exports = animalRoute;