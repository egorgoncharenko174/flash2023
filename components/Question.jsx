const React = require('react');
const Layout = require('./Layout');
const CardQuestion = require('./CardQuestion')

module.exports = function Question({ quest }) {
  return (
    <Layout>
      <CardQuestion quest={quest} />
    </Layout>
  );
};
