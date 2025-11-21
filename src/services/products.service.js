import { getAllProductsModel, getProductByIDModel, createProductModel, deleteProductModel } from "../models/products.model.js";

export const getProductsService = async () => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const products = await getAllProductsModel();
                resolve(products);
            } catch (error) {
                reject(error);
            }
        })
    )
};

export const getProductByIDService = async (id) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const product = await getProductByIDModel(id);
                resolve(product);
            } catch (error) {
                reject(error);
            }
        })
    )
};

export const createProductService = async (productData) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const newProduct = await createProductModel(productData);
                resolve(newProduct);
            } catch (error) {
                reject(error);
            }
        })
    )
};

export const deleteProductService = async (id) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const result = await deleteProductModel(id);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        })
    )
};