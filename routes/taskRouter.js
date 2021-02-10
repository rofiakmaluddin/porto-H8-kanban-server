const TaskController = require("../controllers/taskController")
const authenticate = require("../middlewares/authenticate")
const authorize = require("../middlewares/authorize")
const router = require("express").Router()

router.use(authenticate)
router.get('/', TaskController.getAllData)
router.post('/', TaskController.addData)
router.get('/userData', TaskController.getMyData)

router.use(authorize)
router.put('/:id', TaskController.editData)
router.patch('/:id', TaskController.changeCategory)
router.delete('/:id', TaskController.destroy)

module.exports = router