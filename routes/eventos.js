const {obtenerEventosPorCategoria, registrarEvento, ultimosEventos} = require("../controllers/eventos");
const express = require("express");
const app = express();


app.post("/RegistrarEvento", registrarEvento);
app.get("/Eventos/:category", obtenerEventosPorCategoria);
app.get("/UltimosEventos/:category", ultimosEventos);

module.exports = app;