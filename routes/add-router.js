const express = require('express');
const router = express.Router();
const controller = require('../controllers/add-ctrl');

router.post('/add/:user_id', controller.addItem);
router.post('/add/purchase/:user_id', controller.addPurchase);

module.exports = router;