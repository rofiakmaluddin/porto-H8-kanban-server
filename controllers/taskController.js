const { Task } = require('../models')

class TaskController {
  static async getAllTask(req, res, next) {
    try {
      let tasks = await Task.findAll()
      res.status(200).json({tasks})
      next()
    } catch (error) {
      next(error)
    }
  }

  static async createTask(req, res, next) {
    try {
      const UserId = +req.decoded.id
      console.log(UserId)
      const { title, category } = req.body
      const newTask = await Task.create({title, category, UserId})
      
      res.status(200).json({
        id: newTask.id, 
        title: newTask.title, 
        category: newTask.category, 
        UserId: newTask.UserId
      })

      next()
    } catch (error) {
      next(error)
    }
  }

  static async updateTitleTask(req, res, next) {
    try {
      let id = await +req.params.id
      console.log(id,'<<<<id')
      let {title} = await req.body
      let task = await Task.update({title}, {where: {id}})
      res.status(200).json({task})
      next()
    } catch (error) {
      next(error)
    }
  }

  static async updateCategoryTask(req, res, next) {
    try {
      let id = +req.params.id
      let {category} = req.body
      let task = await Task.update({category}, {where: {id}})
      res.status(200).json({task})
      next()
    } catch (error) {
      next(error)
    }
  }

  static async deleteTask(req, res, next) {
    try {
      const id = +req.params.id
      let task = await Task.destroy({where: {id}})
      res.status(200).json({task})
      next()
    } catch (error) {
      next(error)
    }
  }

}

module.exports = TaskController