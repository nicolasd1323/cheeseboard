const { DataTypes } = require('sequelize');
// const { default: ModelManager } = require('sequelize/types/model-manager');
const { Sequelize, sequelize, Model } = require('./db');

class Board extends Model{
}
Board.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  rating: DataTypes.BIGINT,
}, {
  sequelize,
  timestamps: false,
})
module.exports = {
    Board
};