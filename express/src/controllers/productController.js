const { fetchProducts } = require('../utils/fetchData');
const { validatePriceRange } = require('../utils/validateInput');
const Product = require("../models/Product");


//Get products data on startup 

let productData = [];

(
  async () => {
    try {
      fetchProducts().then(async (data) => {
        await Product.insertMany(data);
      })
    }
    catch (error) {
      throw error;
    }

  }
)();

async function getAllProducts(req, res) {
  res.status(200).json(productData);

}

async function getProductsByCategory(req, res) {
  let category = req.params.category.toUpperCase();
  let filteredData = productData.filter(product => product.category.toUpperCase() === category);
  res.json({
    data: filteredData
  })
}
async function getProductsByPriceRange(req, res) {
  let { min, max } = req.params;
  let filteredData = productData.filter(product => product.price <= max && product.price >= min)
  res.json({
    data: filteredData
  })
}



module.exports = { getAllProducts, getProductsByCategory, getProductsByPriceRange };