require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models');

const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');


app.use('/', authRoutes); 

app.get('/', (req, res) => res.redirect('/login'));

app.use('/dashboard', verifyToken,  itemRoutes);
app.use('/add', verifyToken,  itemRoutes);
app.use('/edit', verifyToken,  itemRoutes);
app.use('/delete', verifyToken,  itemRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    app.listen(3000, () => console.log('Server running at http://localhost:3000'));
  })
  .catch(err => console.error('Database connection error:', err));
