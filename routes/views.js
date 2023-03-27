const express = require('express');
const router = express.Router();
const viewController = require('../controllers/views');

router.get('/home/:userId', viewController.getHome);

router.post('/home/:category', viewController.postHome);

module.exports = router;