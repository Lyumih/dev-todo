// подключение express
const express = require('express');
// создаем объект приложения
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));
// определяем обработчик для маршрута "/"
app.get('/', function(request, response) {
  // отправляем ответ
  response.send('<h2>Привет Express!</h2>');
});
// начинаем прослушивать подключения на 3000 порту
app.listen(5000);

app.get('/', function(request, response) {
  // response.json({ status: 'ok' });
  response.send('ok');
});
app.get('/about', function(request, response) {
  response.send('<h1>О сайте</h1>');
});
app.get('/contact', function(request, response) {
  response.send('<h1>Контакты</h1>');
});
app.listen(5000);
