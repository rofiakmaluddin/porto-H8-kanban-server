const router = require('express').Router()
const RouterController = require('../controllers/taskController')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

router.use(authenticate)
router.get('/', RouterController.getAllTask)
router.post('/', RouterController.createTask)


router.patch('/:id', authorize, RouterController.updateTitleTask)
router.patch('/:id/:category', authorize, RouterController.updateCategoryTask)
router.delete('/:id', authorize, RouterController.deleteTask)

module.exports = router