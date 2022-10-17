const Event = require("../models/eventos");


module.exports = {
   async ultimosEventos(req, res){
      try {
         const {category} = req.params;
         const lastEvents = await Event.find({categoria: category}).sort({fecha: -1}).limit(3);
         res.status(200).send({ data: lastEvents});
      } catch (next) {
         
      }
   },

   async registrarEvento(req, res){
      try {
         const eventProps = req.body;
         console.log(eventProps);
         const eventCreated = await Event.create(eventProps);

         res.status(201).send({ message: "Evento creado exitosamente"});
      } catch (next) {
         
      }

   },

   async obtenerEventosPorCategoria(req, res){
      try {
         const {category} = req.params;
         const eventsByCategory = await Event.find({"categoria" : category});
         res.status(201).send({ data: eventsByCategory});
      } catch (next) {
         
      }
   }

}

