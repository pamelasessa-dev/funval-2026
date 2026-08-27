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

router.get("/", getMenu);

router.get("/:id", getProduct);

router.post("/", validateProduct, postProduct);

router.put("/:id", putProduct);

router.delete("/:id", removeProduct);

export default router;