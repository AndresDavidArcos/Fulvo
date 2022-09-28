const mongoose = require("mongoose")

const MONGO_URI = "mongodb://localhost:27017/eventos";

module.exports = mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("Se ha conectado a una bd de mongodb");
},
    err => {
        console.log("Se produjo el error: "+err);
    }
    );