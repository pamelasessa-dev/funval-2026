import { Router } from "express";

import {
  getMenu,
  getProduct,
  postProduct,
  putProduct,
  removeProduct,
} from "../controllers/product.controller.js";

const router: Router = Router() ;

router.get("/", getMenu);

router.get("/:id", getProduct);

router.post("/", postProduct);

router.put("/:id", putProduct);

router.delete("/:id", removeProduct);

export default router;