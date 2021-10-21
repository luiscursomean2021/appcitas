const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Animal = new Schema({
    nombre: { type: String, require: true },
    edad: { type: Number, require: true },
    raza: { type: String, require: true },
    tamanio: { type: String, require: true },
    vacunas: { type: Boolean },
    imagen: { type: String, require: true },
    _id_usuario: { type: Schema.Types.ObjectId, ref: "usuario" }
}, { collection: "animales" })


module.exports = mongoose.model("animales", Animal)