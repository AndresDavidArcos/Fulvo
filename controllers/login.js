const User = require("../models/usuarios")
module.exports = {
   async register(req, res){
      try {
         
         const user = req.body;
         await User.create(user);
         res.status(201).send({ message: "Usuario registrado exitosamente"});
      } catch (next) {
         
      }
   },

   async loginVerification(req, res){
      try {
         const user = req.body;
         const userCoincidences = await User.find({"nombre": user.nombre, "clave": user.clave});
         if(!userCoincidences){
            return res.status(404).send({message: "Usuario no encontrado"});
         }
         
         res.status(201).send({ data: userCoincidences[0]});
      } catch (next) {
         
      }
   }

}