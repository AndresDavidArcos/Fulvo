const express = require("express");
const cors = require("cors");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/Fulvo/Imagenes", express.static(__dirname+"/public"));

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
