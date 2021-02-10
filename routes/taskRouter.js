const TaskController = require("../controllers/taskController")

const router = require("express").Router()

router.get('/', TaskController.getAllData)
router.post('/:id', TaskController.addData)

router.get('/:id', TaskController.getMyData)
router.put('/:id', TaskController.editData)
router.patch('/:id', TaskController.changeCategory)
router.delete('/:id', TaskController.destroy)

module.exports = router