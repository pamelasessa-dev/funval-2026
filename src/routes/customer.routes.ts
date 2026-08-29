import { Router } from "express";

import{
    getCustomerController,
    getCustomer,
    postCustomer,
    putCustomer,
    removeCustomer,
} from "../controllers/customer.controller.js";

export const customerRouter: Router = Router();

customerRouter.get("/", getCustomerController,(req,res)=>{
    /*
  #swagger.tags = ['Customers']
  #swagger.summary = 'Obtener todos los clientes'
  #swagger.description = 'Obtiene la lista completa de clientes registrados.'

  #swagger.responses[200] = {
    description: 'Lista de clientes obtenida correctamente'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
}); 

customerRouter.get("/:id", getCustomer,(req,res)=>{
    /*
  #swagger.tags = ['Customers']
  #swagger.summary = 'Obtener un cliente por ID'
  #swagger.description = 'Obtiene la información de un cliente específico mediante su identificador.'

  #swagger.responses[200] = {
    description: 'Cliente encontrado correctamente'
  }

  #swagger.responses[400] = {
    description: 'El ID proporcionado no es válido'
  }

  #swagger.responses[404] = {
    description: 'Cliente no encontrado'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
}); 

customerRouter.post("/", postCustomer,(req,res)=>{
    /*
  #swagger.tags = ['Customers']
  #swagger.summary = 'Crear un cliente'
  #swagger.description = 'Registra un nuevo cliente en el sistema.'

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      name: 'Juan Pérez',
      email: 'juan@example.com',
      phone: '099123456',
      address: 'Av. Principal 123'
    }
  }

  #swagger.responses[201] = {
    description: 'Cliente creado correctamente'
  }

  #swagger.responses[400] = {
    description: 'Datos del cliente inválidos'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/

}); 

customerRouter.put("/:id", putCustomer,(req,res)=>{
    /*
  #swagger.tags = ['Customers']
  #swagger.summary = 'Actualizar un cliente'
  #swagger.description = 'Actualiza la información de un cliente existente mediante su identificador.'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'integer',
    description: 'Identificador del cliente'
  }

  #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: {
      name: 'Juan Pérez actualizado',
      email: 'juan.actualizado@example.com',
      phone: '099987654',
      address: 'Nueva dirección 456'
    }
  }

  #swagger.responses[200] = {
    description: 'Cliente actualizado correctamente'
  }

  #swagger.responses[400] = {
    description: 'Datos del cliente inválidos'
  }

  #swagger.responses[404] = {
    description: 'Cliente no encontrado'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/

}); 

customerRouter.delete("/:id", removeCustomer,(req,res)=>{
    /*
  #swagger.tags = ['Customers']
  #swagger.summary = 'Eliminar un cliente'
  #swagger.description = 'Elimina un cliente existente mediante su identificador.'

  #swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'integer',
    description: 'Identificador del cliente'
  }

  #swagger.responses[200] = {
    description: 'Cliente eliminado correctamente'
  }

  #swagger.responses[400] = {
    description: 'El ID proporcionado no es válido'
  }

  #swagger.responses[404] = {
    description: 'Cliente no encontrado'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
}); 
