const bcrypt = require('bcryptjs');

const hashPass = (pass) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pass, salt);
}

const comparePass = (pass, passDb) => {
  return bcrypt.compareSync(pass, passDb);
}

module.exports = {
  hashPass,
  comparePass
}