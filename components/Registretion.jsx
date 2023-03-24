const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <h1 className="sign-in">Регистрация</h1>
      <form action="/auth/reg" method="post" id="sign_up" className="form">
        <label className="text-font">Логин</label>
        <input name="name" type="text" />
        <label className="text-font">E-mail</label>
        <input name="email" type="email" />
        <label className="text-font">Пароль</label>
        <input name="password" type="password" />
        <label className="text-font">Повторите пароль</label>
        <input name="passwordRepeat" type="password" />
        <button type="submit" className="btn">
          Зарегистрироваться
        </button>
        <p className="error" />
      </form>
    </Layout>
  );
};
