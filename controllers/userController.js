const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')

class UserController {
    static async register(req, res, next){
        try {
            const {name, email, password} = req.body
            const newUser = await User.create({name, email, password})
            res.status(201).json({id: newUser.id, name: newUser.name, email: newUser.email})
            next()
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next){
      try {
        const {email, password} = req.body
        const user = await User.findOne({where: {email:email}})
        
        if (!user) throw {name: "CustomError", msg:'Invalid email or password', status: 400}
        
        const comparedPassword = await comparePassword(password,user.password)
        if (!comparedPassword) throw {name: "CustomError", msg:'Invalid email or password', status: 400}
      
        const access_token = await generateToken({id: user.id, email: user.email, name: user.name})
        res.status(200).json({access_token})
        next()
      } catch (error) {
        next(error)
      }

    }

    static async glogin(req, res, next){
      
    }
}

module.exports = UserController