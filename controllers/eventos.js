const Event = require("../models/eventos");


module.exports = {
   async ultimosEventos(req, res){
      try {
         const lastEvents = await Event.find({});
         res.status(200).send({ data: lastEvents});
      } catch (next) {
         
      }
   },

   async registrarEvento(req, res){
      try {
         const eventProps = req.body;
         console.log(eventProps);
         const eventCreated = await Event.create(eventProps);
         console.log("b")

         res.status(201).send({ data: eventCreated});
      } catch (next) {
         
      }

   },

   async obtenerEventosPorCategoria(req, res){
      try {
         const category = req.params;
         const eventsByCategory = await Event.find({"categoria" : category});
         res.status(201).send({ data: eventsByCategory});
      } catch (next) {
         
      }
   }

}