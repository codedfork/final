const axios = require('axios');

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch product data.');
  }
};

module.exports = { fetchProducts };
