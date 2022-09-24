const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//middlewares
app.use(bodyParser.json());
app.use((err, req, res, next)=>{
    res.status(400).send({
        error: err
    })
})
//rutas

app.use("/Fulvo");
