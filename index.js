const { Board } = require('./Board')
const { User } = require('./User')
const { Cheese } = require('./Cheese')

User.hasMany(Board)

Board.belongsToMany(Cheese, {through: 'board_cheese'});
Cheese.belongsToMany(Board, {through: 'board_cheese'});


module.exports = {
  User,
  Board,
  Cheese
}