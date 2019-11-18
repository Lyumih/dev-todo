require('dotenv').config();
console.log(process.env.DB_URL)
// Тестовый скрипт работоспособности MongoDB
var mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
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
}).catch(e=>console.log(e));
// tree.save()
console.log('END');
