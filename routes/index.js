var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:true, message:'Welcome EXpress API'});
});



module.exports = router;
