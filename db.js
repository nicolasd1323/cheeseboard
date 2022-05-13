const path = require('path');
const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize('dataBase', 'username', 'password',{
  dialect: 'sqlite',
  storage: './cheeses.sqlite',
  logging: false
})

module.exports = {
    sequelize,
    Sequelize, 
    Model
};