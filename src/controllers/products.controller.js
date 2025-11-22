import { getProductsService, getProductByIDService, createProductService, deleteProductService, updateProductService } from "../services/products.service.js";

export const getProductsController = async (req, res) => {
    try {
        const products = await getProductsService();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving products: " + error });
    }
};

export const getProductByIDController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Product ID is required" });
        }
        const product = await getProductByIDService(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving product: " + error });
    }
};

export const createProductController = async (req, res) => {
    try {
        const productData = req.body;
        const newProduct = await createProductService(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error creating product: " + error });
    }
};

export const deleteProductController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Product ID is required" });
        }
        await deleteProductService(id);
        res.status(200).json({ message: `Product with ID: ${id} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product: " + error });
    }
};

export const updateProductController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "Product ID is required" });
        }
        const productData = req.body;
        const updatedProduct = await updateProductService(id, productData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error updating product: " + error });
    }
};