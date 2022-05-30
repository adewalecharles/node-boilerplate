var express = require('express');
var router = express.Router();

// Get the controller
const UsersController = require("../app/controller").UsersController;

/* GET the users listing function */
router.get('/', UsersController.getUsers);

router.post('/add', UsersController.addTwoNumbers);

module.exports = router;
