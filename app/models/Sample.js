const { Sequelize } = require('sequelize');
const db = require('../database/index');

const Sample = db.define('sample', {
     id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
    },

  name: {
    type: Sequelize.STRING,
    allowNull: false
    },
  
}, {
  // Other model options go here
});

module.exports = Sample;