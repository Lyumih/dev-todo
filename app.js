// подключение express
const express = require('express');
require('dotenv').config();

// создаем объект приложения
const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
const mongoose = require('mongoose');


mongoose.connect(
  'mongodb://localhost:27017/dev-todo',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err);

  },
);

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Сервер ожидает подключения...', port);
});

const treeRoute = require('./routes/tree')
const leafRoute = require('./routes/leaf')

const userRoute = require('./routes/user')

app.use('/api/tree', treeRoute)
app.use('/api/leaf', leafRoute)
app.use('/api/user', userRoute)

app.get('/api', (req, res) => {
  res.json({ status: 'ok', routes: routesData });
});




let routesData = [
  'GET /tree ',
  'GET /tree/:id',
  'GET /leaf',
  'GET /leaf/:id',
  'GET /user',
  'POST /user',
];
