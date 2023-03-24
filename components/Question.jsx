const React = require('react');
const Layout = require('./Layout');
const CardQuestion = require('./CardQuestion')

module.exports = function Question({ quest, users }) {
  return (
    <Layout users={users}>
      <CardQuestion quest={quest} users={users} />
    </Layout>
  );
};
