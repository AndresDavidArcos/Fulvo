const express = require("express");
const app = express();
const db = require("./database")
//middlewares
app.use(express.json());
//configuraciones
app.set("port","2000");

//rutas
app.use("/Fulvo",require("./routes/eventos"));
app.use("/Fulvo",require("./routes/login"));

//manejador de errores
app.use((err,req,res,next)=>{
    res.json({message: err});
})

app.listen(app.get("port"), ()=>{
    console.log("backend escuchando en el puerto "+app.get("port"));
})
