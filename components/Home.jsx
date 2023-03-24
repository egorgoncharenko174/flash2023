const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ topic }) {
  return (
    <Layout>
      <h1 className="d-flex justify-content-evenly h-100 d-inline-block mt-5">
        Выберите тему
      </h1>

      <div className="container">
        <div className="card" style={{ width: '25rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {topic[0].title}
            </h5>
            <a href="http://localhost:4000/topic/1/question/1" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '25rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {' '}
              {topic[1].title}
            </h5>
            <a href="http://localhost:4000/topic/2/question/8" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: '25rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{ textAlign: 'center' }} className="card-title">
              {' '}
              {topic[2].title}
            </h5>
            <a href="http://localhost:4000/topic/3/question/15" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
