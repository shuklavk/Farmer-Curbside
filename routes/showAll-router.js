const express = require('express');
const router = express.Router();
const controller = require('../controllers/showAll-ctrl.js');

router.get('/showAll/items/:user_id', controller.showAllFarmerItems);
router.get('/showAll/items', controller.showAllItems);
router.get('/showAll/purchases/:user_id', controller.showAllPurchases);

module.exports = router;