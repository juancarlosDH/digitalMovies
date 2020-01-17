const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/profile', homeController.profile);

router.get('/my-list', homeController.myList);

module.exports = router;