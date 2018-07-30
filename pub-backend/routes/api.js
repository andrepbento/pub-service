var express = require('express');
var router = express.Router();

/* GET REST api. */
router.get('/', function(req, res, next) {
  res.send('respond with a api');
});

module.exports = router;
