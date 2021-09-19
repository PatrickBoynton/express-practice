const fs = require('fs');
const path = require('path');
const helper = require('../utils/path');


const p = path.join(helper, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (error, data) => {
            let cart = { products: [], totalPrice: 0};

            if (!error) {
                cart = JSON.parse(data);
            }

            const existingProductIndex = cart.products.findIndex(product => product.id === id);

            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;

            if (existingProduct) {
                updatedProduct = { ...existingProduct };

                updatedProduct.quantity += 1;

                cart.products = [...cart.products];

                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id, quantity: 1 };

                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice += +productPrice;

            fs.writeFile(p, JSON.stringify(cart), (error) => {
                console.log(error);
            });
        });
    }
};
