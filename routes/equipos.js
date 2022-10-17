const {registrarEquipo, obtenerEquiposPorCategoria, subirLogo} = require("../controllers/equipos");
const express = require("express");
const router = express.Router();

const multer = require("multer")

const storage = multer.diskStorage({
    destination: './public/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        }
    
})

const upload = multer({storage: storage});


router.post("/RegistrarEquipo", registrarEquipo);
router.get("/Equipos/:category", obtenerEquiposPorCategoria);
router.post("SubirLogo", upload.single('logoEquipo') ,subirLogo);

module.exports = router;