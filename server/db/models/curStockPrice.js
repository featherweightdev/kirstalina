const Sequelize = require('sequelize');
const db = require('../db');

const CurStockPrice = db.define('curStockPrice', {
  ticker: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pricePerStock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  availableShares: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 10000
  }
});

module.exports = CurStockPrice;
