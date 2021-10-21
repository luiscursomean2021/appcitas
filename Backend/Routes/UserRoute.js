const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const usersRoute = express.Router();
const { body, validationResult, param } = require('express-validator');

const cors = require('cors');
app.use(cors());

let User = require('../Models/User');

//Get users
usersRoute.route('/').get((req, res) => {
    User.find((err, data) => {
        if(err) res.json(err);
        else res.json(data);
    });
})

//New user
usersRoute.route('/').post(async(req, res) => {

    let salt = await bcrypt.genSalt(12);
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    User.create(req.body, (err, data) => {
        if(err) res.json(err);
        else res.json(data);
    });
})

//Delete user
usersRoute.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id, (err, data) => {
        if(err) res.json(err);
        else res.json(data);
    })
})

//Get user by id
usersRoute.route('/:id').get((req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(err) res.json(err);
        else res.json(data);
    })
})

//Edit user
usersRoute.route('/:id').put(async(req, res) => {

    let salt = await bcrypt.genSalt(12);
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    User.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, data) => {
        if(err) res.json(err);
        else res.json(data);
    })
})

module.exports = usersRoute;