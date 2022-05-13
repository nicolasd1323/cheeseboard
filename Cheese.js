const { DataTypes } = require('sequelize');
const {Sequelize, sequelize, Model} = require('./db');

class Cheese extends Model{

}
Cheese.init({ 
  name: DataTypes.STRING,
},
  {
    sequelize,
    timestamps: false,
})
module.exports = {
    Cheese
};