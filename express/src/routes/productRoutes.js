const express = require('express');
const {
  getAllProducts,
  getProductsByCategory,
  getProductsByPriceRange,
} = require('../controllers/productController');

const router = express.Router();

// Fetch all products
router.get('/', getAllProducts);

// // Fetch products by category
router.get('/category/:category', getProductsByCategory);

// // Fetch products within a price range
router.get('/price-range/:min/:max', getProductsByPriceRange);

module.exports = router;
