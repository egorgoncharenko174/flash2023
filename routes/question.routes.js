const express = require('express');

const router = express.Router();
const { QA, User } = require('../db/models');
const { Topic } = require('../db/models');
const Question = require('../components/Question');
const CardQuestion = require('../components/CardQuestion');

// router.get('/:topicId/question', async (req, res) => {});

router.get('/:topicId/question/:questionId', async (req, res) => {
  const { questionId, topicId } = req.params;

	const users = await User.findOne({ where: { id: req.session.userid } });
  const quest = await QA.findOne({
    where: { topic_id: Number(topicId), id: Number(questionId) },
    raw: true,
  });
  if (
    Number(questionId) === 1 ||
    Number(questionId) === 8 ||
    Number(questionId) === 15
  ) {

    console.log('first');
    res.renderComponent(Question, { title: 'ВОПРОСЫ', quest, users });

  } else {
    res.json({
      html: res.renderComponent(
        CardQuestion,

        { title: 'ВОПРОСЫ', quest, users },
        { htmlOnly: true },

      ),
    });
  }
});

router.post('/:temaid/question/:questionId', async (req, res) => {
  const { answerInput, id } = req.body;
  const { temaid, questionId } = req.params;
  console.log(id);
  console.log('-----------------------------------------------');

  const answer = await QA.findOne({ where: { id } });
  console.log(answer);
  if (answer.answers !== answerInput) {
    let result = `Ошибка! Правильный ответ ${answer.answers}`;
    res.json({ otvet: result });
  } else {
    let result2 = `Правильно, ты молодец!`;
    res.json({ otvet: result2 });
  }
});

module.exports = router;
