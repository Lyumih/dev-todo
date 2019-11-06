// Тестовый скрипт работоспособности MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' + Math.random() });
kitty.save().then(() => {
  console.log('Meow');
  mongoose.connection.close();
});
console.log('END');
