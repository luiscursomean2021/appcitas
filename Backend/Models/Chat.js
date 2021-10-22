const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Chat = new Schema({
    id_user: { type:Schema.Types.ObjectId, ref:"usuario" },
    id_user2: { type:Schema.Types.ObjectId, ref:"usuario"}
});

module.exports = mongoose.model("chat", Chat);