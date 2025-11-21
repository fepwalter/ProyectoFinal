import { Router } from "express";
import { getProductsController,
    getProductByIDController,
    deleteProductController,
    createProductController
 } from "../controllers/products.controller.js";

const router = Router();

router.get("/products", getProductsController);
router.get("/products/:id", getProductByIDController);
router.post("/products/create", createProductController);
router.delete("/products/:id", deleteProductController);


export default router;