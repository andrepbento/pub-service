import express from 'express'
var router = express.Router();

const itemController = require('../controllers/Item.controller')

router.route('/')
    .get(itemController.findAll)
    .post(itemController.create)

router.route('/:id')
    .get(itemController.findOne)
    .put(itemController.update)
    .delete(itemController.delete)

module.exports = router;