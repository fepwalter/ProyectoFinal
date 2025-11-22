import { Product, productConverter} from "./product.object.js";
import { db } from "../data/data.js";
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products").withConverter(productConverter);

export const getAllProductsModel = async () => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const productsSnapshot = await getDocs(productsCollection);
                const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                resolve(productsList);
            } catch (error) {
                reject("Error getting products: " + error);
            }
        })
    )
};

export const getProductByIDModel = async (id) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const productDoc = doc(productsCollection, id);
                const productSnapshot = await getDoc(productDoc);
                if (productSnapshot.exists()) {
                    resolve({ id: productSnapshot.id, ...productSnapshot.data() });
                } else {
                    reject("No such product with ID: " + id);
                }
            } catch (error) {
                reject("Error getting product: " + error);
            }
        })
    )
};

export const createProductModel = async (productData) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const newProduct = new Product(productData.name, productData.categorie, productData.price);
                const newProductDoc = doc(productsCollection);
                await setDoc(newProductDoc, newProduct);
                resolve({ id: newProductDoc.id, ...newProduct });
            } catch (error) {
                reject("Error creating product: " + error);
            }
        })
    )
};

export const deleteProductModel = async (id) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const productDoc = doc(productsCollection, id);
                await deleteDoc(productDoc);
                resolve("Product deleted successfully");
            } catch (error) {
                reject("Error deleting product: " + error);
            }
        })
    )
};

export const updateProductModel = async (id, productData) => {
    return (
        new Promise(async (resolve, reject) => {
            try {
                const productDoc = doc(productsCollection, id);
                const updatedProduct = new Product(productData.name, productData.categorie, productData.price);
                await setDoc(productDoc, updatedProduct);
                resolve({ id: productDoc.id, ...updatedProduct });
            }
            catch (error) {
                reject("Error updating product: " + error);
            }
        })
    )
};