// Тестовый скрипт работоспособности MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dev-todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let userData = [
  {
    name: 'Андрей',
    age: 23,
  },
  {
    name: 'Даша',
    age: 19,
  },
  {
    name: 'Сергей',
    age: 24,
  },
  {
    name: 'Алиса',
    age: 20,
  },
];

const User = mongoose.model('User', {
  name: { type: String, required: true },
  age: { type: Number, required: true },
});
User.insertMany(userData).then(() => {
  console.log('Created!');
  mongoose.connection.close();
});
// tree.save()
console.log('END');
