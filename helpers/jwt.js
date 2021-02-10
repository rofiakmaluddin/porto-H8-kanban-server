const jwt = require('jsonwebtoken');

const createAccessToken = (payload) => {
  console.log(process.env.SECRET);
  return jwt.sign(payload, process.env.SECRET);
}

const verifyAccessToken = (access_token) => {
  return jwt.verify(access_token, process.env.SECRET)
}

module.exports = {
  createAccessToken,
  verifyAccessToken
}