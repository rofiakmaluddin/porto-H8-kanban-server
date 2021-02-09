const {decodedToken} = require('../helpers/jwt')

const authenticate = function authentication(req, res, next) {
  try {
    const access_token = req.headers.access_token
    const decoded = decodedToken(access_token)
    req.decoded = decoded
    next()
  } catch (error) {
    // console.log(error, '----error authenticate')
    let err = {name: 'CustomError', msg:'Invalid Token', status: 401}
    next(err)
  }
}

module.exports = authenticate