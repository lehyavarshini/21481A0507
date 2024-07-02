const axios = require('axios');
const API_BASE_URL = 'http://20.244.56.144/test';

const productService = {
  async getTopProducts(categoryname, queryParams) {
    try {
      const response = await axios.get(`${API_BASE_URL}/companies/${categoryname}/products`, {
        params: queryParams
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getProductById(categoryname, productid) {
    try {
      const response = await axios.get(`${API_BASE_URL}/companies/${categoryname}/products/${productid}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = productService;
