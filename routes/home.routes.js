const router = require('express').Router();
const { Topic, User } = require('../db/models');

const Home = require('../components/Home');

router.get('/', async (req, res) => {
	try{
		const topic = await Topic.findAll();
		console.log(req.session.userid);
		
		if(req.session.userid) {
			const users = await User.findOne({ where: { id: req.session.userid } });
			console.log(users);
			
			res.renderComponent(Home, { title: 'Главная страница', topic, users });
		} else {
			res.renderComponent(Home, { title: 'Главная страница', topic });
		}
		
	}catch(err) {
		console.log(err);
	}
  
});

module.exports = router;
