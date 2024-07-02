const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:categoryName/products', productController.getProductsByCategory);
router.get('/:categoryName/products/:productId', productController.getProductById);

module.exports = router;
