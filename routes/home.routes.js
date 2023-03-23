const express = require('express');
const router = express.Router();
const { Topic } = require('../db/models');

const Home = require('../components/Home');

router.get('/', async (req, res) => {
  const topic = await Topic.findAll();
  res.renderComponent(Home, { title: 'Главная страница', topic });
  console.log(topic)
});

module.exports = router;
