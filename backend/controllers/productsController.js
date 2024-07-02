const axios = require('axios');
const config = require('../config/config');

const API_BASE_URL = 'http://20.244.56.144/test';

const productController = {
  async getProductsByCategory(req, res, next) {
    const { categoryName } = req.params;
    const { top, minPrice, maxPrice, sortField, sortOrder, page } = req.query;

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
          Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}` 
        }
      });

      res.json(response.data);
    } catch (error) {
      next(error);
    }
  },

  async getProductById(req, res, next) {
    const { categoryName, productId } = req.params;

    try {
      const response = await axios.get(`${API_BASE_URL}/companies/${config.clientID}/categories/${categoryName}/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}`
        }
      });

      res.json(response.data);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = productController;
