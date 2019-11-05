// подключение express
const express = require('express');
// создаем объект приложения
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

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

app.listen(5000);

let treeData = {
  name: 'Разработка',
  children: [
    { name: 'Создание макета' },
    { name: 'Создание репозитория' },
    {
      name: 'Настройка проекта',
      children: [
        {
          name: 'Инициировать npm'
        },
        {
          name: 'Подключить пакеты',
          children: [{ name: 'eslint' }, { name: 'react' }]
        },
        { name: 'Тестовый запуск' }
      ]
    }
  ]
};

let leafData = ['Публикация', 'Возможные ошибки', 'Рефакторинг'];
let routesData = ['GET tree ', 'GET tree/:id', 'GET leaf', 'GET leaf/:id'];
