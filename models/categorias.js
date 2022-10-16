const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Categoria = new Schema({
    nombre: {
        type: String,
        require: "Se requiere una categoria"
    }
});

const Category = mongoose.model("categoria", Categoria);
module.exports = Category;