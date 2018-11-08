require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const Sequelize = require('sequelize');

const app = express();
const port = 710;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../react-client/dist'));

const dbUrl = process.env.DB_URL;

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres'
});

// axios.get(`http://localhost:710/products?id=${currentProductID}`)
app.get('/products', (req, res) => {
  let productID = req.query.id; // http://localhost:710/products?id=91 gets product id 91
  sequelize.query(`SELECT * FROM products WHERE id=${productID};`, {
      type: sequelize.QueryTypes.SELECT
    })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(error);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));