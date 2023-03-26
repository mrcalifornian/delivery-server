const express = require('express');
const router = express.Router();
const viewController = require('../controllers/views');

router.get('/home', viewController.getHome);

module.exports = router;