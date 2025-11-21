export class Product {
    constructor(name, description, price, stock) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    

    for (const [key, value] of Object.entries(this)) {
            if (value === undefined) {
                throw new Error(`Missing required field: ${key}`);
            }
        }
    }
};

// Firestore data converter
export const productConverter = {
    toFirestore: (product) => {
        return {
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Product(data.name, data.description, data.price, data.stock);
    }
};