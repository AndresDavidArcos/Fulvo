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
         console.log("el que si le sabe", eventProps);
         const eventCreated = await Event.create(eventProps);

         res.status(201).send({ data: eventCreated});
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

