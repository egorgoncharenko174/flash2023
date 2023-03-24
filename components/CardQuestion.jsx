const React = require('react');

module.exports = function CardQuestion({ quest }) {
  return (
    <form>
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body">
          <p className="card-text">{quest.questions}</p>
        </div>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          id="answer"
          placeholder="Введи ответ сюда"
        />
        <button type="button" className="btn btn-dark">
          Проверить вопрос
        </button>
        {quest.id === 7 || quest.id === 14 || quest.id === 21
         ? (
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
      </div>
    </form>
  );
};
