const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let User = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    userType: {
            type: String,
            required: true,
            enum: ["Administrador", "Cliente"],
            default: "Cliente"
        },
    favoritos: [{
        idUser: { type: Schema.Types.ObjectId, ref: "animales" }
    }],
    bloqueos: [{
        idUser: { type: Schema.Types.ObjectId, ref: "animales" }
    }]
}, { collection: "usuarios" })

module.exports = mongoose.model("usuarios", User)