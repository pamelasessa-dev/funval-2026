import {type Request, type Response} from "express";

import{
    getCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
} from "../models/customer.model.js";

import{
    customerSchema,
    updateCustomerSchema,
}from "../schemas/customer.schema.js";

export const getCustomerController = async (req:Request,res:Response)=>{
    try{
        const customers = await getCustomers();
        res.json(customers);

    }catch(error){
        res.status(500).json({
            error: "Error al traer a los clientes",
        });

    }
};

export const getCustomer = async(req:Request,res:Response)=>{
    try{
        const id = Number(req.params.id);
        if(isNaN(id)){
            res.status(400).json({
                error: "El id debe ser un numero",
            });
            return;
        }
        const customer = await getCustomerById(id);
        if(!customer){
            res.status(404).json({
                error: "Cliente no encontrado",
            });
            return;
        }
        res.json(customer);
    }catch(error){
        res.status(500).json({
            error: "No se pudo obtener al cliente",
        });
    }
};

export const postCustomer = async ( req: Request, res: Response ) => { 
    try { 
        const result = customerSchema.safeParse(req.body); 
        if (!result.success) { 
            res.status(400).json({ 
                error: result.error.issues, 
            }); 
            return; 
        } 
        const { 
            name, 
            email, 
            phone, 
            address 
        } = 
        result.data; 
        const customer = await createCustomer( name, email, phone, address ); 
        res.status(201).json(customer); 
    } catch (error) { 
        res.status(500).json({ 
            error: "Error al crear el cliente", 
        }); 
    } 
};

export const putCustomer = async (req:Request,res:Response) =>{
    try{
        const id =Number(req.params.id);
        if(isNaN(id)){
            res.status(400).json({
                error: "El id debe ser un valor numérico",
            });
            return;
        }
        const result = updateCustomerSchema.safeParse(req.body);
        if(!result.success){
            res.status(400).json({
                error: result.error.issues,
            });
            return;
        }
        const {name,email,phone,address} = result.data;
        const customer = await updateCustomer(id,name,email,phone,address);
        if(!customer){
            res.status(404).json({
                error:"cliente no encontrado",
            });
            return
        }
        res.json(customer);

    }catch(error){
        res.status(500).json({
            error: "Error al actualizar al cliente",
        });

    }
};

export const removeCustomer = async (req:Request,res:Response)=>{
    try { 
        const id = Number(req.params.id); 
        if (isNaN(id)) { 
            res.status(400).json({ 
                error: "El ID debe ser un valor numérico", 
            }
        ); 
        return; 
    } 
    const customer = await deleteCustomer(id); 
    if (!customer) { 
        res.status(404).json({ 
            error: "Cliente no encontrado", 
        }); 
        return; 
    } 
    res.json(
        { message: "Cliente eliminado correctamente", customer, }
    ); 
} catch (error) { 
    res.status(500).json(
        { error: "Error al eliminar el cliente", }
    ); 
} 

};