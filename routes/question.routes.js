const express = require('express');

const router = express.Router();
const { QA, User } = require('../db/models');
const { Topic } = require('../db/models');
const Question = require('../components/Question');
const CardQuestion = require('../components/CardQuestion');

// router.get('/:topicId/question', async (req, res) => {});

router.get('/:topicId/question/:questionId', async (req, res) => {
  const { questionId, topicId } = req.params;
  console.log(questionId);
	const users = await User.findOne({ where: { id: req.session.userid } });
  const quest = await QA.findOne({
    where: { topic_id: Number(topicId), id: Number(questionId) },
    raw: true,
  });
  if (
    Number(questionId) === 1
    || Number(questionId) === 8
    || Number(questionId) === 15
  ) {
    console.log('first');
    res.renderComponent(Question, { title: 'ВОПРОСЫ', quest, users });
  } else {
    console.log('second');
    res.json({
      html: res.renderComponent(
        CardQuestion,
        { title: 'ВОПРОСЫ', quest, users },
        { htmlOnly: true },
      ),
    });
  }
});

module.exports = router;
