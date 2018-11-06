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
app.use('/products', express.static(__dirname + '/../react-client/dist'));

const sequelize = new Sequelize('product_view', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

app.get('products/:id', (req, res) => {

  let productID = req.params.id; // http://localhost:710/products?id=91 gets product id 91
  sequelize.authenticate()
    .then(() => {
      console.log('Authenticated');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send();
    });
  sequelize.query(`SELECT * FROM products WHERE id=${productID};`, {
      type: sequelize.QueryTypes.SELECT
    })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));