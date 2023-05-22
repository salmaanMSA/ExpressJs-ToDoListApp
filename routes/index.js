const express = require('express');

// initialize router
const router = express.Router();

console.log("router loaded");

// import controller
const homeController = require('../controller/homeController');

router.get('/', homeController.home);

module.exports = router;