const {obtenerCategorias, registrarCategoria} = require("../controllers/categorias");
const express = require("express");
const router = express.Router();


router.post("/RegistrarCategoria", registrarCategoria);
router.get("/Categorias", obtenerCategorias);

module.exports = router;