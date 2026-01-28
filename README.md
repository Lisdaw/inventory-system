```
inventory-system/
├─   controllers/
│   ├─ authController.js
│   └─ itemController.js
├─ middlewares/
│   ├─ verifyToken.js
│   ├─ setUser.js
│   └─ roleAccess.js
├─ models/
│   ├─ index.js
│   ├─ user.js
│   └─ item.js
├─ routes/
│   ├─ authRoutes.js
│   └─ itemRoutes.js
├─ views/
│   ├─ login.ejs
│   ├─ dashboard.ejs
│   ├─ addItem.ejs
│   ├─ editItem.ejs
│   └─ partials/
│       ├─ header.ejs
│       └─ footer.ejs
├─ config/
│   └─ config.json
├─ .env
├─ app.js
├─ package.json
└─ README.md
```
```
Clone repository:
git clone <repository-url>
cd inventory-system
```
```
Install dependencies:
npm install
```
```
Buat file .env di root folder:
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
DB_NAME=inventory_db
DB_HOST=127.0.0.1
JWT_SECRET=your_jwt_secret
```
```
Jalankan migration Sequelize:
npx sequelize-cli db:migrate
```
```
Jalankan server:
node app.js
```
