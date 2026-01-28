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

// hanya manager
exports.managerOnly = (req, res, next) => {
  if (!req.user) return res.status(401).send('Unauthorized');
  if (req.user.role !== 'manager') return res.status(403).send('Forbidden');
  next();
};

// manager atau admin
exports.managerOrAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).send('Unauthorized');
  if (req.user.role !== 'manager' && req.user.role !== 'admin') {
    return res.status(403).send('Forbidden');
  }
  next();
};


