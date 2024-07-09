const express = require('express');
const router = express.Router();
const { getAllProducts, getProductsByCategory } = require('../controllers/productController');

router.get('/products', getAllProducts);
router.get('/products/category/:category', getProductsByCategory);

module.exports = router;
