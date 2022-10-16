const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Equipo = new Schema({
    nombre: {
        type: String,
        require: "Se requiere el nombre del equipo"
    },
    marcador: {
        type: Number,
        required: "Se requiere el marcador final de el equipo en este evento"
    }
}, {_id: false});

const Evento = new Schema(
    { 
        fecha: {
            type: Date,
            default: () => new Date()
         },
        equipo1: Equipo,
        equipo2: Equipo,
        categoria: {
            type: String,
            enum: ["Futbol", "Baloncesto", "Tenis", "Beisbol"],
            required: "Se requiere indicar a que categoria pertenece este evento"
        }
    }

)

const Event = mongoose.model("evento", Evento);
module.exports = Event;