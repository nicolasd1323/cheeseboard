const { Board } = require('./Board')
const { User } = require('./User')
const { Cheese } = require('./Cheese')

// User.hasMany(Board, Cheese)
// Board.hasMany(Cheese)

// Cheese.belongsTo(User, Cheese)
// Board.belongsTo(User)

module.exports = {
  User,
  Board,
  Cheese
}