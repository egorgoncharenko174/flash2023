const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ topic }) {
  return (
    <Layout>
      <h1 className="text-center" >
        Выберите тему
      </h1>

      <div className="container">
        <div className="card" style={{ width: '25rem' }}>
          <img src="/img/1.jpeg" className="garru-img" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {topic[0].title}
            </h5>
            <a
              href="http://localhost:4000/topic/1/question/1"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '25rem' }}>
          <img src="/img/2.jpeg" className="kino-img" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {' '}
              {topic[1].title}
            </h5>
            <a
              href="http://localhost:4000/topic/2/question/8"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '25rem' }}>
          <img src="/img/3.jpeg" className="question" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {' '}
              {topic[2].title}
            </h5>
            <a
              href="http://localhost:4000/topic/3/question/15"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
