import { type Request, type Response} from "express";
import { getSales, getSaleById, createSale } from "../models/sale.model.js";
import pool from "../config/db.js";
export async function getAllSales(req:Request,res:Response){
    try{
        const sales = await getSales();
        res.json(sales);
    }catch(error){
         console.error(error);
        res.status(500).json({
            error:"Error al obtener las ventas"
        });
    }
}

export async function getSaleByIdController(req:Request,res:Response){
    try{
        const id = Number(req.params.id);
        if(isNaN(id)){
            res.status(400).json({error:"el id debe ser un valor numérico"});
            return;
        }
        const sale = await getSaleById(id);
        if(!sale){
            res.status(404).json({error:"No se ha encontrado la venta"});
            return;
        }

        res.json(sale);

    }catch(error){
        res.status(500).json({
            error: "Error al obtener datos de venta"
        });

    }
}

export async function createSaleController(req:Request,res:Response){
    try{
        const {customer_id, total} = req.body;
        const sale = await createSale(customer_id,total);
        res.status(201).json(sale);

    }catch(eror){
        res.status(500).json({error:"Error al crear la nueva venta"});

    }
}