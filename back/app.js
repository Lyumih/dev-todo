// подключение express
const express = require('express');
// создаем объект приложения
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/', function(request, response) {
  // response.json({ status: 'ok' });
  response.json({ status: 'ok' });
});
app.get('/about', function(request, response) {
  response.send('<h1>О сайте</h1>');
});
app.get('/contact', function(request, response) {
  response.send('<h1>Контакты</h1>');
});
app.listen(5000);
