const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.loginPage = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: req.body });
  if (!user) return res.send('Login gagal');

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET
  );

  res.cookie('token', token);
  res.redirect('/dashboard');
};

exports.managerOnly = (req, res, next) => {
  if (req.user.role !== 'manager') return res.status(403).send('Forbidden');
  next();
};
