const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config/config');

// Example: Handling authentication using provided access tokens
router.post('/login', async (req, res, next) => {
  const { clientID, clientSecret } = config;
  const { username, password } = req.body;

  try {
    const response = await axios.post(`${config.authServerURL}/login`, {
      client_id: clientID,
      client_secret: clientSecret,
      username,
      password
    });

    // Assuming successful login returns a token
    const { access_token } = response.data;
    res.json({ access_token });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
