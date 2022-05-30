const express = require('express');
const router = express.Router();
const auth = require('../app/middleware/auth');

// Get the controller
const UsersController = require("../app/controller").UsersController;

/* GET the users listing function */
router.get('/', auth, UsersController.getUsers);

router.post('/add', auth, UsersController.addTwoNumbers);

module.exports = router;
