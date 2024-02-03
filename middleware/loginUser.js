/**
 * loginUser.js
 * @description :: middleware that verifies JWT token of user
 */

const jwt = require('jsonwebtoken');
const { PLATFORM } = require('../constants/authConstant');
const response = require('../utils/response');
const adminSecret = require('../constants/authConstant').JWT.ADMIN_SECRET;
const deviceSecret = require('../constants/authConstant').JWT.DEVICE_SECRET;
const clientSecret = require('../constants/authConstant').JWT.CLIENT_SECRET;
const authenticateJWT = (platform) =>  (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    let secret = '';
    if (platform == PLATFORM.ADMIN){
      secret = adminSecret;
    }
    else if (platform == PLATFORM.DEVICE){
      secret = deviceSecret;
    }
    else if (platform == PLATFORM.CLIENT){
      secret = clientSecret;
    }
    jwt.verify(token,secret, (error, user) => {
      if (error) {
        response.unAuthorized();
      }
      req.user = user;
      next();
    });
  } else {
    response.unAuthorized();
  }
};
module.exports = authenticateJWT;