const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { managerOnly } = require('../middlewares/roleAccess');

// dashboard
router.get('/', itemController.dashboard);

// tambah barang
router.get('/add', managerOnly, itemController.formAdd);
router.post('/add', managerOnly, itemController.createItem);

router.get('/edit/:id', managerOnly, admin, itemController.formEdit);
router.post('/edit/:id', managerOnly, admin, itemController.updateItem);

router.post('/delete/:id', managerOnly, itemController.deleteItem);

module.exports = router;
