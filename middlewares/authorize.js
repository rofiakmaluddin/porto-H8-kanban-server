const { Task } = require('../models')

const authorize = function authorization(req, res, next) {
    const TaskId = +req.params.id
    Task.findByPk(TaskId)
    .then(task => {
        if (+task.UserId === +req.decoded.id){
            
            next()
        } else {
            throw {name: 'CustomError', msg: 'Not authorized', status: 401}
        }
    })
    .catch(error => {
      next(error)
    })
}

module.exports = authorize