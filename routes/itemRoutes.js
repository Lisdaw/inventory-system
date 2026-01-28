const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { managerOnly,managerOrAdmin } = require('../middlewares/roleAccess');
const verifyToken = require('../middlewares/verifyToken');
const setUser = require('../middlewares/setUser');

router.get('/', itemController.dashboard);

router.get('/add', managerOnly, itemController.formAdd);
router.post('/add', managerOnly, itemController.createItem);

router.get('/edit/:id', verifyToken, setUser, managerOrAdmin, itemController.formEdit);
router.post('/edit/:id',verifyToken, setUser, managerOrAdmin, itemController.updateItem);

router.post('/delete/:id', managerOnly, itemController.deleteItem);

module.exports = router;
