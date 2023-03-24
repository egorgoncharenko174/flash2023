const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ topic, users }) {
  return (

    <Layout users={users}>
      <h1 className="text-center">Выберите тему</h1>

      <div className="container">
        <div className="card" style={{ width: '25rem' }}>
          <img src="https://rosman.ru/upload/iblock/a78/a78db010a8dd9d12e2d9d4eec4ce42db.JPG" className="garru-img" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {topic[0].title}
            </h5>

            <a
              href="http://localhost:4000/topic/1/question/1"
              className="btn btn-primary"
            >
              Перейти к теме
            </a>

          </div>
        </div>
        <div className="card" style={{ width: '25rem' }}>
          <img src="https://static4.tgstat.ru/channels/_0/77/77986964bc7ee700f5fdb3a14e61d0d3.jpg" className="kino-img" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {' '}
              {topic[1].title}
            </h5>
            <a
              href="http://localhost:4000/topic/2/question/8"
              className="btn btn-primary"
            >
              Перейти к теме
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '25rem' }}>
          <img src="https://weblinks.ru/wp-content/uploads/2021/07/1-14.jpg" className="question" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {' '}
              {topic[2].title}
            </h5>
            <a
              href="http://localhost:4000/topic/3/question/15"
              className="btn btn-primary"
            >
              Перейти к теме
            </a>
          </div>
        </div>
      </div>
      <button type="submit" className="DelBtn btn btn-danger">
        Кнопка УДАЛИТЬ Егора
      </button>
    </Layout>
  );
};
