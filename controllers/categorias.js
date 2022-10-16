const Category = require("../models/categorias");


module.exports = {

   async registrarCategoria(req, res){
      try {
         const categoryProps = req.body;
         await Category.create(categoryProps);

         res.status(201).send({ message: "categoria creada con exito"});
      } catch (next) {
         
      }

   },

   async obtenerCategorias(req, res){
      try {
         const categorys = await Category.find({});
         res.status(201).send({ data: categorys});
      } catch (next) {
         
      }
   }

}

