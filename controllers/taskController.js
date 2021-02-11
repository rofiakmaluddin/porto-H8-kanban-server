const {User,Task} = require('../models')

class TaskController {
  static getAllData(req,res,next){
    Task
      .findAll({include: [User]})
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
  static addData(req,res,next){
    const {title,description,category} = req.body
    const UserId = req.user

    Task
      .create({title,description,category,UserId})
      .then(task => {
        res.status(201).json(task)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
  static getMyData(req,res,next){
    const UserId = req.user
    Task
      .findAll({where:{UserId}, include: User})
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
  static getById(req,res,next){
    const id = +req.params.id
    Task
      .findOne({where:{id}, include: User})
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
  static editData(req,res,next){
    const {title,description} = req.body
    const id = +req.params.id
    Task
      .update({title,description},{where:{id}, returning:true})
      .then(task => {
        res.status(200).json(task[1][0])
      })
      .catch(err => {
        next(err)
      })
  }
  static changeCategory(req,res,next){
    const {category} = req.body
    const id = +req.params.id
    Task
      .update({category}, {where:{id}, returning: true})
      .then(task => {
        res.status(200).json(task[1][0])
      })
      .catch(err => {
        next(err)
      })
  }
  static destroy(req,res,next){
    const id = +req.params.id
    Task
      .destroy({where:{id}})
      .then(task => {
        res.status(200).json({ msg: 'Your task has been deleted' })
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
}

module.exports = TaskController