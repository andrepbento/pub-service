var express = require('express');
var router = express.Router();

// TODO: Implement users resource
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
