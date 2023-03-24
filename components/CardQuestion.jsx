const React = require('react');

module.exports = function CardQuestion({ quest, users }) {
  return (
    <form className="formQuest" method="post" data-checkId={`${quest.id}`}>
      <div className="card" style={{ width: '30rem', textAlign: 'center' }}>
        <div className="card-body">
          <p className="card-text">{quest.questions}</p>
        </div>
        <input
          style={{ textAlign: 'center' }}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          id="answerInput"
          placeholder="Введи ответ сюда"
          name="answerInput"
        />
        <button
          data-Questionid={`${quest.id}`}
          data-temaId={`${quest.topic_id}`}
          type="submit"
          className="btn btn-dark"
          data-id={quest.id}
        >
          Проверить вопрос
        </button>
        {quest.id === 7 || quest.id === 14 || quest.id === 21 ? (
          <a href="/">
            <button type="button" className="btn btn-dark">
              Выйти к выбору тем
            </button>
          </a>
        ) : (
          <button
            data-Questionid={`${quest.id}`}
            data-temaId={`${quest.topic_id}`}
            type="button"
            className="nextBtn btn btn-primary"
          >
            Перейти к следующему вопросу
          </button>
        )}
        <div className="otvet" style={{ textAlign: 'center' }} />
      </div>
    </form>
  );
};
