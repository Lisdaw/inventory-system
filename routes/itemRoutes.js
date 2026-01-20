const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const verifyToken = require('../middlewares/verifyToken');
const { managerOnly } = require('../middlewares/roleAccess');

router.get('/dashboard', verifyToken, itemController.dashboard);
router.get('/add', verifyToken, managerOnly, itemController.formAdd);
router.post('/add', verifyToken, managerOnly, itemController.createItem);
router.get('/edit/:id', verifyToken, itemController.formEdit);
router.post('/edit/:id', verifyToken, itemController.updateItem);
router.post('/delete/:id', verifyToken, managerOnly, itemController.deleteItem);

module.exports = router;
