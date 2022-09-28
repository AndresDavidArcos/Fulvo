const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Usuario = new Schema({
    nombre: {
        type: String,
        require: "Se requiere el usuario de un nombre"
    },
    clave: {
        type: String,
        required: "Se requiere que el usuario de una contraseña"
    }
});



const User = mongoose.model("usuario", Usuario);
module.exports = User;