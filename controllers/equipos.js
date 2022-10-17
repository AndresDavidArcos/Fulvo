const Team = require("../models/equipos");


module.exports = {

   async registrarEquipo(req, res){
      try {
         const teamProps = req.body;
         const teamCreated = await Team.create(teamProps);

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

