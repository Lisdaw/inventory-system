const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.loginPage = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });
  if (!user) return res.send('Login gagal');

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET
  );

  res.cookie('token', token);
  res.redirect('/dashboard');
};


exports.logout = (req, res) => {
  res.clearCookie('token'); 
  res.redirect('/login');   
};
