import { Router } from "express";

import {
  getMenu,
  getProduct,
  postProduct,
  putProduct,
  removeProduct,
} from "../controllers/product.controller.js";

import { validateProduct } from "../middlewares/validate-product.js";

const router: Router = Router();

router.get("/", getMenu,(req,res)=>{
  /*
  #swagger.tags = ['Products']
  #swagger.summary = 'Obtener todos los productos'
  #swagger.description = 'Obtiene la lista de productos disponibles, permitiendo aplicar filtros por precio y paginación.'

  #swagger.responses[200] = {
    description: 'Lista de productos obtenida correctamente'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
}); 


router.get("/:id", getProduct,(req,res)=>{
  /*
  #swagger.tags = ['Products']
  #swagger.summary = 'Obtener un producto por ID'
  #swagger.description = 'Obtiene la información de un producto específico mediante su identificador.'

  #swagger.responses[200] = {
    description: 'Producto encontrado correctamente'
  }

  #swagger.responses[400] = {
    description: 'El ID proporcionado no es válido'
  }

  #swagger.responses[404] = {
    description: 'Producto no encontrado'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
}); 
router.post("/", validateProduct, postProduct, (req,res)=>{
  /*
  #swagger.tags = ['Products']
  #swagger.summary = 'Crear un producto'
  #swagger.description = 'Crea un nuevo producto en el sistema.'

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      name: 'Hamburguesa clásica',
      description: 'Hamburguesa con carne, queso y verduras',
      price: 250,
      cost: 120,
      stock: 10
    }
  }

  #swagger.responses[201] = {
    description: 'Producto creado correctamente'
  }

  #swagger.responses[400] = {
    description: 'Datos del producto inválidos'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
}); 

router.put("/:id", putProduct, (req,res)=>{
  /*
  #swagger.tags = ['Products']
  #swagger.summary = 'Actualizar un producto'
  #swagger.description = 'Actualiza la información de un producto existente mediante su identificador.'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'integer',
    description: 'Identificador del producto'
  }

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      name: 'Hamburguesa especial',
      description: 'Hamburguesa con carne, queso, bacon y verduras',
      price: 300,
      cost: 150,
      stock: 15
    }
  }

  #swagger.responses[200] = {
    description: 'Producto actualizado correctamente'
  }

  #swagger.responses[404] = {
    description: 'Producto no encontrado'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
}); 

router.delete("/:id", removeProduct, (req,res)=>{
  /*
  #swagger.tags = ['Products']
  #swagger.summary = 'Eliminar un producto'
  #swagger.description = 'Elimina un producto existente mediante su identificador.'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'integer',
    description: 'Identificador del producto'
  }

  #swagger.responses[200] = {
    description: 'Producto eliminado correctamente'
  }

  #swagger.responses[404] = {
    description: 'Producto no encontrado'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
}); 


export default router; 