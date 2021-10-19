
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let User = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    favoritos: [{
        idUser: { type: Schema.Types.ObjectId, ref: "animales" }
    }],
    bloqueos: [{
        idUser: { type: Schema.Types.ObjectId, ref: "animales" }
    }]
}, { collection: "usuarios" })

module.exports = mongoose.model("usuarios", User)

// export enum UserType {
//     ADMIN = "Administrador",
//     CLIENT = "Cliente"
// }