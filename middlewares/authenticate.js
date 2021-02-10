const {User} = require('../models')
const { verifyAccessToken } = require("../helpers/jwt")

const authenticate = async (req,res,next) => {
  const access_token = req.headers.access_token
  if (!access_token) return next ({name: 'authentication', msg: 'not authenticated', status: 400})
  try{
    const payload = verifyAccessToken(access_token)
    if (!payload || !payload.id) {
      return next ({name: 'authentication', msg: 'not authenticated', status: 400})
    }
    const user = await User.findByPk(payload.id)
    if(!user) return next ({name: 'authentication', msg: 'not authenticated', status: 400})
    req.user = payload.id
    next()
  } catch(err){
    next(err)
  }
}

module.exports = authenticate