const config = require('../config/config');
const axios = require('axios');

const authController = {
  async login(req, res, next) {
    const { clientID, clientSecret } = config;
    const { username, password } = req.body;

    try {
      const response = await axios.post(`${config.authServerURL}/login`, {
        client_id: clientID,
        client_secret: clientSecret,
        username,
        password
      });

      const { access_token } = response.data;
      res.json({ access_token });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = authController;
