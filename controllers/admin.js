const Product = require('../models/product');

exports.getAddProduct = (request, response) => {
    response.render('admin/add-product', {
        pageTitle: 'Add Product',
        formCSS: true,
        editing: false,
    });
};

exports.addProducts = (request, response) => {
    const { title, imageUrl, price, description } = request.body;

    const product = new Product(title, imageUrl, price, description);

    product.save();

    response.redirect('/');
};

exports.getEditProduct = (request, response) => {
    const editMode = request.query.edit;
    const id = request.params.id;

    Product.findById(id, product => {
        if (!editMode) {
            return response.redirect('/');
        }
        response.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            formCSS: true,
            editing: editMode,
            product: product,
        });
    });
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
