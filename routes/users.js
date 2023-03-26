const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/user/:userId', userController.getUser);

router.post('/register', userController.register);

router.put('/number', userController.setNumber);

router.put('/lang', userController.setLang);

router.put('/name', userController.setName);

router.put('/operation', userController.setOperation);

router.post('/location', userController.getLocation);

module.exports = router;

