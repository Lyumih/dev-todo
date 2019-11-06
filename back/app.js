// подключение express
const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jsonParser = express.json();

// создаем объект приложения
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

const userScheme = new Schema({ name: String, age: Number });
const User = mongoose.model('User', userScheme);

mongoose.connect(
  'mongodb://localhost:27017/dev-todo',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) return console.log(err);
    app.listen(5000, function() {
      console.log('Сервер ожидает подключения...');
    });
  },
);

app.get('/', (req, res) => {
  res.json({ status: 'ok', routes: routesData });
});

app.get('/tree', (req, res) => {
  res.json([treeData, treeData, treeData]);
});

app.get('/tree/:id', (req, res) => {
  res.json(treeData);
});

app.get('/leaf', (req, res) => {
  res.json([leafData, leafData, leafData]);
});

app.get('/leaf/:id', (req, res) => {
  res.json(leafData);
});

app.get('/user', async (req, res) => {
  const users = await User.find({});
  res.json({ route: 'GET /user', users });
});

app.post('/user', jsonParser, async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const userName = req.body.name;
  const userAge = req.body.age;
  const user = new User({ name: userName, age: userAge });

  await user.save();

  res.json({ route: 'POST /user', user });
});

let treeData = {
  name: 'Разработка',
  children: [
    { name: 'Создание макета' },
    { name: 'Создание репозитория' },
    {
      name: 'Настройка проекта',
      children: [
        {
          name: 'Инициировать npm',
        },
        {
          name: 'Подключить пакеты',
          children: [{ name: 'eslint' }, { name: 'react' }],
        },
        { name: 'Тестовый запуск' },
      ],
    },
  ],
};

let leafData = ['Публикация', 'Возможные ошибки', 'Рефакторинг'];
let routesData = [
  'GET /tree ',
  'GET /tree/:id',
  'GET /leaf',
  'GET /leaf/:id',
  'GET /user',
  'POST /user',
];
