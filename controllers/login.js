const User = require("../models/usuarios")
module.exports = {
   async register(req, res){
      try {
         
         const user = req.body;
         const userCreated = await User.create(user);
         res.status(201).send({ data: userCreated});
      } catch (next) {
         
      }
   },

   async loginVerification(req, res){
      try {
         const user = req.body;
         const userCoincidences = await User.find({"nombre": user.nombre, "clave": user.clave});
         if(!userCoincidences){
            return res.status(404).send("No users found");
         }
         
         res.status(201).send({ data: userCoincidences});
      } catch (next) {
         
      }
   }

}