import { type Request, type Response } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/product.model.js";

export const getMenu = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.json(products);
  } 
  catch (error) {
    res.status(500).json({
      error: "Error al obtener los productos",
    });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({
        error: "El ID debe ser un valor numérico",
      });
      return;
    }

    const product = await getProductById(id);

    if (product === null) {
      res.status(404).json({
        error: "Producto no encontrado",
      });
      return;
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener el producto",
    });
  }
};

export const postProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    
    const product = await createProduct(data);
    res.status(201).json(product);
  } 
  catch (error) {
    res.status(500).json({
      error: "Error al crear el producto",
    });
  }
};

export const putProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    
    const data = req.body;
    
    const product = await updateProduct(id, data);
    if (product === null) {
      res.status(404).json({
        error: "Producto no encontrado",
      });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el producto",
    });
  }
};

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    
    const product = await deleteProduct(id);
    
    if (product === null) {
      res.status(404).json({
        error: "Producto no encontrado",
      });
      return;
    }
    res.json({
      message: "Producto eliminado correctamente",
      product,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el producto",
    });
  }
};