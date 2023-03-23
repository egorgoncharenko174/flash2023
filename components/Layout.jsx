const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/style.css" />
        <title>{title}</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
