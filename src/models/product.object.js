export class Product {
    constructor(name, categorie, price, ) {
        this.name = name;
        this.categorie = categorie;
        this.price = price;
    

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
            categorie: product.categorie,
            price: product.price,
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Product(data.name, data.categorie, data.price);
    }
};