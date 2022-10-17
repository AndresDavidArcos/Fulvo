const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Equipo = new Schema({
    nombre: {
        type: String,
        require: "Se requiere el nombre del equipo"
    },

    categoria: {
        type: String,
        require: "Se requiere la categoria del equipo"
    }

});


const Team = mongoose.model("equipo", Equipo);
module.exports = Team;