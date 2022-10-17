const express = require("express");
const cors = require("cors");
const multer = require("multer")
const fs = require("node:fs");

const storage = multer.diskStorage({
    destination: './public/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        }
    
});

const upload = multer({storage: storage});

const app = express();
const db = require("./database")
//middlewares
app.use(cors());
app.use(express.json());
app.use("/Fulvo/Imagenes", express.static(__dirname+"/public"));

app.post("/subir/:nombreEquipo", upload.single('logoEquipo'), (req, res) =>{
    const {nombreEquipo} = req.params;
    const fileName = req.file.originalname;
    const fileExtension = (fileName.split("."))[1];
    fs.rename("./public/"+fileName, "./public/"+nombreEquipo+"."+fileExtension, ()=>{console.log("archivo renombrado: ", fileName)})
    res.status(200).send({message: "Archivo subido correctamente"});
})
//configuraciones
app.set("port","2000");

//rutas
app.use("/Fulvo",require("./routes/eventos"));
app.use("/Fulvo",require("./routes/login"));
app.use("/Fulvo",require("./routes/equipos"));
app.use("/Fulvo",require("./routes/categorias"));

//manejador de errores
app.use((err,req,res,next)=>{
    res.json({message: err});
})

app.listen(app.get("port"), ()=>{
    console.log("backend escuchando en el puerto "+app.get("port"));
})
