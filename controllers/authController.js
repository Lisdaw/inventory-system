const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.loginPage = (req, res) => {
  res.render('login', { error: null, oldInput: {} });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render('login', { 
      error: 'Username dan password wajib diisi', 
      oldInput: { username } 
    });
  }

  const user = await User.findOne({ where: { username, password } });

  if (!user) {
    return res.render('login', { 
      error: 'Username atau password salah', 
      oldInput: { username } 
    });
  }

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );

  res.cookie('token', token, { httpOnly: true });
  res.redirect('/dashboard');
};


exports.logout = (req, res) => {
  res.clearCookie('token'); 
  res.redirect('/login');   
};
