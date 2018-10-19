require('dotenv').config();

const config = {
  nexmoApiKey: process.env.NEXMO_API_KEY,
  nexmoApiSecret: process.env.NEXMO_API_SECRET,
  applicationId: process.env.APP_UUID,
  proxyToNumber: process.env.PROXY_TO_NUMBER,
  port: process.env.PORT || 5000
};

module.exports = config;
