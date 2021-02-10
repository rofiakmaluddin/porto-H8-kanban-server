const errHandler = (err,req,res,next) => {
  const errors = []
  let status = 500
  if (err.name === 'SequelizeUniqueConstraintError') {
    err.errors.forEach(e => {
      errors.push(e.message)
    });
    status = 400
  } else if (err.name === 'SequelizeValidationError') {
    err.errors.forEach(e => {
      errors.push(e.message)
    });
    status = 400
  } else if (err.name === 'login error') {
    errors.push(err.msg)
    status = err.status
  } else if (err.name === 'authentication'){
    errors.push(err.msg)
    status = err.status
  } else if (err.name === 'authorization error'){
    errors.push(err.msg)
    status = err.status
  }
  res.status(status).json(errors)
}

module.exports = errHandler