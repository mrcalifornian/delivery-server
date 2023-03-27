const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/products', productController.getProducts);

module.exports = router;
