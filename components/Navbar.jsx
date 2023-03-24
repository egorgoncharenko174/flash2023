const React = require('react');
const Layout = require('./Layout');

module.exports = function Navbar({ users }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Домой
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
					{!users && (
						<>
            <li className="nav-item">
              <a href="/auth/" className="nav-link active" aria-current="page">
                Зайти
              </a>
            </li>
            <li className="nav-item">
              <a href="/auth/reg" className="nav-link">
                Зарегистрироваться
              </a>
            </li>
						</>
						)}
						{users && (
            <li className="nav-item">
              <a href="/auth/logout" className="nav-link">
                Выйти
              </a>
            </li>
						)}
            <li className="nav-item">
              <div>{users?.name}</div>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled">Выйти</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
