const Product = require('../models/product');


exports.getProducts = (request, response) => {
    Product.fetchAll((products) => {
        response.render('shop/product-list', {
            pageTitle: 'Shop',
            hasProducts: products.length > 0,
            products,
        });
    });
};

exports.getProduct = (request, response) => {
    const id = request.params.id;

    Product.findById(id, product =>
        response.render('shop/product-detail.handlebars', {
            product,
            pageTitle: product.title
        })
    );
};

exports.getIndex = (request, response) => {
    Product.fetchAll((products) => {
        response.render('shop/index', {
            pageTitle: 'Shop',
            hasProducts: products.length > 0,
            products,
        });
    });
};

exports.getCart = (request, response) => {
    response.render('shop/cart', {
        pageTitle: 'Cart'
    });
};

exports.getOrders = (request, response) => {
    response.render('shop/orders', {
        pageTitle: 'Orders'
    });
};

exports.getCheckout = (request, response) => {
    response.render('shop/checkout', {
        pageTitle: 'Checkout',
    });
};
