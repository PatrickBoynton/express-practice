const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callBack) => {

    fs.readFile(p, (error, data) => {
        if (error) {
            return callBack([]);
        }
        callBack(JSON.parse(data));
    });
};


module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }


    save = () => {
        this.id = Math.random().toString();

        getProductsFromFile((products) => {
            console.log(this);
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (error) => {
                console.log(error);
            });
        });
    };

    static fetchAll = (callBack) => {
        getProductsFromFile(callBack);
    };

    static findById = (id, callBack) => {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            callBack(product);
        });
    };
};
