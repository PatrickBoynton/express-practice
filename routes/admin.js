const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProductPage);

router.get('/product', adminController.getProducts);

router.post('/product', adminController.addProducts);


exports.routes = router;
