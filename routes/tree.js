const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json([treeData, treeData, treeData]);
});

router.get('/:id', (req, res) => {
  res.json(treeData);
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

module.exports = router
