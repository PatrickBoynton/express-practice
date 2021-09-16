const Product = require('../models/product');

exports.getAddProductPage = (request, response) => {
    response.render('admin/admin', {
        pageTitle: 'Add Product',
        formCSS: true
    });
};

exports.addProducts = (request, response) => {
    const {title, imageUrl, price, description} = request.body;

    const product = new Product(title, imageUrl, price, description);

    product.save();

    response.redirect('/');
};

exports.getProducts = (request, response) => {
    Product.fetchAll((products) => {
        response.render('admin/product-list', {
            pageTitle: 'Shop',
            hasProducts: products.length > 0,
            products,
        });
    });
};
