const Team = require("../models/equipos");
const fs = require("node:fs")

module.exports = {
   /*
   async subirLogo(upload.single('logoEquipo'), req, res){


  },
*/
async subirLogo(req, res){
   try {
      const {teamName} = req.params;
      console.log("teamname: ", teamName);
      const fileName = req.file.originalname;
      console.log("filename: ", fileName);
  
      const fileNameList = fileName.split(".");
      const fileExtension = fileNameList[1];
      fs.rename("../public/"+fileName, "../public/"+teamName+"."+fileExtension)
      res.status(200).send({message: "Archivo subido correctamente"});
   } catch (next) {
      
   }

},

   async registrarEquipo(req, res){
      try {
         console.log("AYER PASE POR TU CASA")
         const teamProps = req.body;
         console.log("Y ME TIRASTE UN", teamProps);

         await Team.create(teamProps);
         console.log("mañana vuelvo a pasar")

         res.status(201).send({ message: "equipo creado exitosamente"});
      } catch (next) {
         
      }

   },

   async obtenerEquiposPorCategoria(req, res){
      try {
         const {category} = req.params;
         const teamsByCategory = await Team.find({"categoria" : category});
         res.status(201).send({ data: teamsByCategory});
      } catch (next) {
         
      }
   }

}

