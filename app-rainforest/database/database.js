const Sequelize = require('sequelize');

exports.db = new Sequelize('product_view', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

