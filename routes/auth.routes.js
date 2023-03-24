const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const Authorization = require('../components/Authorization');
const Registretion = require('../components/Registretion');

router
  .get('/reg', (req, res) => {
		console.log(req.session);
    res.renderComponent(Registretion, { title: 'Регистрация' });
  })
  .get('/', (req, res) => {
    res.renderComponent(Authorization, { title: 'Авторизация' });
  });
// Authorization
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        res.json({ message: 'Неверный email или пароль!' });
        return;
      }
      const compare = await bcrypt.compare(password, user.password);
      if (user && compare) {
        req.session.userid = user.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Неверный email или пароль!' });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

// Registration
router.post('/reg', async (req, res) => {
	
  try {
    const { name, email, password, passwordRepeat } = req.body;
    if (name && email && password && passwordRepeat) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          name,
          email,
          password: hash,
        });
        req.session.userid = newUser.id;
        // res.redirect('/');
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Такой пользователь уже есть!' });
      }
    }
  } catch ({ message }) {
    res.json(message);
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});
module.exports = router;
