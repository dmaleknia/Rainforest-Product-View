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

// const sequelize = new Sequelize('product_view', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/products', (req, res) => {
  console.log(req);
  let productID;
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
      res.status(200).send(JSON.stringify(data));
    })
    .catch(err => {
      console.error(err);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));