const {obtenerEventosPorCategoria, registrarEvento, ultimosEventos} = require("../controllers/eventos");
const express = require("express");
const router = express.Router()


router.post("/RegistrarEvento", registrarEvento);
router.get("/Eventos/:category", obtenerEventosPorCategoria);
router.get("/UltimosEventos/:category", ultimosEventos);

module.exports = router;