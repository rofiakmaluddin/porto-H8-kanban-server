const { comparePass } = require('../helpers/bcrypt')
const { createAccessToken } = require('../helpers/jwt')
const {User} = require('../models')

class UserController {
  static register (req,res,next){
    const {firstName,lastName,email,password} = req.body
    User
      .create({firstName,lastName,email,password})
      .then(user => {
        const {id,firstName,lastName,email} = user
        res.status(201).json({id,firstName,lastName,email})
      })
      .catch(err => {
        console.log(err.name, '>>>>>>>>>>>>>>>');
        next(err)
      })
  }
  static login (req,res,next){
    const {email,password} = req.body
    User
      .findOne({where:{email}})
      .then(user => {
        if (!user) throw {name: 'login error', msg: 'Invalid email or password', status: 400}
        const comparedPass = comparePass(password,user.password)
        if (!comparedPass) throw {name: 'login error', msg: 'Invalid email or password', status: 400}
        const access_token = createAccessToken({
          id: user.id,
          email: user.email
        })
        res.status(200).json({access_token})
      })
      .catch(err => {
        console.log(err, '>>>>>>>>>>>>>>>');
        next(err)
      })
  }
  static googleLogin (req,res,next){
    const client = new OAuth2Client(process.env.CLIENT_ID);
    let email
    client.verifyIdToken({
      idToken: req.body.googleToken,
      audience: process.env.CLIENT_ID
    })
    .then(ticket => {
      const payload = ticket.getPayload()
      email = payload.email
      return User.findOne({
        where:{
          email
        }
      })
    })
    .then(user => {
      if (user) {
        const token = generateToken({
          id:user.id,
          email: user.email
        })
        res.status(200).json({access_token:token})
      } else {
        console.log(process.env.GPASS);
        return User.create({
          email,
          password: process.env.GPASS
        })
      }
    })
    .then(registeredUser => {
      const token = generateToken({
        id:registeredUser.id,
        email: registeredUser.email
      })
      res.status(201).json({access_token:token})
    })
    .catch(err => {
      console.log(err);
      next(err)
    })
  }
}

module.exports = UserController