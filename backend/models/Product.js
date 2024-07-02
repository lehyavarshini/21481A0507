const axios = require('axios');
const config = require('../config/config');

const API_BASE_URL = 'http://20.244.56.144/test';

const productModel = {
  async getProductsByCategory(categoryName, queryParams) {
    const { top, minPrice, maxPrice, sortField, sortOrder, page } = queryParams;

    try {
      const response = await axios.get(`${API_BASE_URL}/companies/${config.clientID}/categories/${categoryName}/products`, {
        params: {
          top,
          minPrice,
          maxPrice,
          sortField,
          sortOrder,
          page
        },
        headers: {
          Authorization: `Bearer ${config.accessToken}`
        }
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getProductById(categoryName, productId) {
    try {
      const response = await axios.get(`${API_BASE_URL}/companies/${config.clientID}/categories/${categoryName}/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${config.accessToken}`
        }
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = productModel;
