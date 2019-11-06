// Тестовый скрипт работоспособности MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dev-todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let leafData = ['Публикация', 'Возможные ошибки', 'Рефакторинг'];

const Leaf = mongoose.model('Leaf', {
  leaf: { type: Array, required: true },
});
Leaf.insertMany({ leaf: leafData }).then(() => {
  console.log('Created!');
  mongoose.connection.close();
});
// tree.save()
console.log('END');
