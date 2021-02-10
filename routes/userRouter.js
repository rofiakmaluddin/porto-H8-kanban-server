const UserController = require('../controllers/userController')

const router = require('express').Router()

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleLogin', UserController.googleLogin)

module.exports = router