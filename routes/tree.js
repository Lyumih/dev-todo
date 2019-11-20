const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');

const { Schema } = mongoose;
const treeScheme = new Schema({ treeJson: String});
const Tree = mongoose.model('Tree', treeScheme);

router.get('/', async (req, res) => {
  // res.send("Бла бла Хеллоу Ворлд")
  const trees = await Tree.find({});
  console.log(trees)

  res.json(trees);
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
