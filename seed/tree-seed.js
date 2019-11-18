// Тестовый скрипт работоспособности MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dev-todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

const Tree = mongoose.model('Tree', {
  name: { type: String, required: true },
  children: Array,
});
const tree = new Tree({ name: 'Zildjian' + Math.random() });
Tree.insertMany(treeData).then(() => {
  console.log('Created!');
  mongoose.connection.close();
});
// tree.save()
console.log('END');
