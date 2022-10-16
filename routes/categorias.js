const {obtenerCategorias, registrarCategoria} = require("../controllers/categorias");
const express = require("express");
const app = express();


app.post("/RegistrarCategoria", registrarCategoria);
app.get("/Categorias", obtenerCategorias);

module.exports = app;