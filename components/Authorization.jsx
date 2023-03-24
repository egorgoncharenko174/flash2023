const React = require('react');
const Layout = require('./Layout');

module.exports = function Authorization({ title }) {
  return (
    <Layout title={title}>
      <div className="block-form">
        <h1 className="sign-in">Войти в личный кабинет</h1>

        <form action="/auth/signin" method="post" id="sign_in" className="form">
          <label className="text-font">E-mail</label>
          <input name="email" type="email" />
          <label className="text-font">Пароль</label>
          <input name="password" type="password" />
          <button type="submit" className="btn">
            Вход
          </button>
          <p className="error" />
        </form>
      </div>
    </Layout>
  );
};
