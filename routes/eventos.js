const {obtenerEventosPorCategoria, registrarEvento, ultimosEventos} = require("../controllers/eventos");
const express = require("express");
const app = express();


app.post("/RegistrarEvento", registrarEvento);
app.get("/Eventos/:categoria", obtenerEventosPorCategoria);
app.get("/UltimosEventos", ultimosEventos);

module.exports = app;