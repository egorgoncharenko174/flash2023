const express = require('express');

const router = express.Router();
const { QA } = require('../db/models');
const { Topic } = require('../db/models');
const Question = require('../components/Question');
const CardQuestion = require('../components/CardQuestion');

// router.get('/:topicId/question', async (req, res) => {});

router.get('/:topicId/question/:questionId', async (req, res) => {
  const { questionId, topicId } = req.params;
  console.log(questionId);
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
    res.renderComponent(Question, { title: 'ВОПРОСЫ', quest });
  } else {
    console.log('second');
    res.json({
      html: res.renderComponent(
        CardQuestion,
        { title: 'ВОПРОСЫ', quest },
        { htmlOnly: true },
      ),
    });
  }
});

module.exports = router;
