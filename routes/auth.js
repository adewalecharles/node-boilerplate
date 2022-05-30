var express = require('express');
var router = express.Router();
const auth = require('../app/middleware/auth');

// Get the controller
const AuthController = require("../app/controller").AuthController;

/* login function */
router.post('/login', AuthController.login);

/* register function */
router.post('/register', AuthController.register);

/* validate jwt token function */
router.post('/validate', auth, AuthController.validateJwtToken);

module.exports = router;
