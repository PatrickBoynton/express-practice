const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);

router.get('/product', adminController.getProducts);

router.post('/product', adminController.addProducts);

router.get('/edit-product/:id', adminController.getEditProduct);

exports.routes = router;
