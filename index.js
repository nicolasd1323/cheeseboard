const { Board } = require('./Board')
const { User } = require('./User')
const { Cheese } = require('./Cheese')

User.hasMany(Board)

Board.belongsToMany(Cheese, {through: 'board_cheese'});
Cheese.belongsToMany(Board, {through: 'board_cheese'});

Board.hasMany(Cheese, { as: 'Cheese'})

module.exports = {
  User,
  Board,
  Cheese
}