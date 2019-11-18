const express = require('express');
const router = express.Router();
const jsonParser = express.json();

const mongoose = require('mongoose');

const { Schema } = mongoose;
const userScheme = new Schema({ name: String, age: Number });
const User = mongoose.model('User', userScheme);

router.get('/', async (req, res) => {
  const users = await User.find({});
  res.json({ route: 'GET /user', users });
});

router.post('/', jsonParser, async (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const userName = req.body.name;
  const userAge = req.body.age;
  const user = new User({ name: userName, age: userAge });

  await user.save();

  res.json({ route: 'POST /user', user });
});

module.exports = router;
