import { Router } from "express";

import {
    getAllSales,
    getSaleByIdController,
    createSaleController
} from "../controllers/sale.controller.js";

export const saleRouter: Router = Router();

saleRouter.get("/", getAllSales, (req, res) => {
   /*
  #swagger.tags = ['Sales']
  #swagger.summary = 'Obtener todas las ventas'
  #swagger.description = 'Obtiene la lista completa de ventas registradas incluyendo el nombre y los datos del cliente asociado mediante un INNER JOIN.'

  #swagger.responses[200] = {
    description: 'Lista de ventas obtenida correctamente'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
});

saleRouter.get("/:id", getSaleByIdController, (req, res) => {
  /*
  #swagger.tags = ['Sales']
  #swagger.summary = 'Obtener una venta por ID'
  #swagger.description = 'Obtiene una venta específica mediante su identificador, incluyendo la información del cliente asociado.'

  #swagger.responses[200] = {
    description: 'Venta encontrada correctamente'
  }

  #swagger.responses[400] = {
    description: 'El ID proporcionado no es válido'
  }

  #swagger.responses[404] = {
    description: 'Venta no encontrada'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
});

saleRouter.post("/", createSaleController, (req, res) => {
   /*
  #swagger.tags = ['Sales']
  #swagger.summary = 'Obtener una venta por ID'
  #swagger.description = 'Obtiene una venta específica mediante su identificador, incluyendo la información del cliente asociado.'

  #swagger.responses[200] = {
    description: 'Venta encontrada correctamente'
  }

  #swagger.responses[400] = {
    description: 'El ID proporcionado no es válido'
  }

  #swagger.responses[404] = {
    description: 'Venta no encontrada'
  }

  #swagger.responses[500] = {
    description: 'Error interno del servidor'
  }
*/
});