const {Task} = require('../models')

const authorize = (req,res,next) => {
  const id = +req.params.id

  Task
    .findByPk(id)
    .then(task => {
      if(!task) throw {name: 'authorization error', msg: 'task not found', status: 404}
      if(req.user !== task.UserId) throw {name: 'authorization error', msg: 'not authorized', status: 400}
      next()
    })
    .catch(err => {
      console.log(err);
      next(err)
    })
}

module.exports = authorize