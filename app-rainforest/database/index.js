const Sequelize = require('sequelize');

const db = new Sequelize('product_view', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

