const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.json([leafData, leafData, leafData]);
});

router.get('/:id', (req, res) => {
  res.json(leafData);
});

let leafData = ['Публикация', 'Возможные ошибки', 'Рефакторинг'];



module.exports = router
