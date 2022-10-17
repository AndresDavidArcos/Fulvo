const {registrarEquipo, obtenerEquiposPorCategoria} = require("../controllers/equipos");
const express = require("express");
const app = express();


app.post("/RegistrarEquipo", registrarEquipo);
app.get("/Equipos/:category", obtenerEquiposPorCategoria);

module.exports = app;