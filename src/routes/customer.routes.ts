import { Router } from "express";

import{
    getCustomerController,
    getCustomer,
    postCustomer,
    putCustomer,
    removeCustomer,
} from "../controllers/customer.controller.js";

export const customerRouter: Router = Router();

customerRouter.get("/", getCustomerController); 
customerRouter.get("/:id", getCustomer); 
customerRouter.post("/", postCustomer); 
customerRouter.put("/:id", putCustomer); 
customerRouter.delete("/:id", removeCustomer);