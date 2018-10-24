const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const _ = require('lodash');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = 710;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));