'use strict'
import express from 'express'
var router = express.Router();

const categoryController = require('../controllers/category.controller')

router.route('/')
    .get(categoryController.findAll)
    .post(categoryController.create)

router.route('/:id')
    .get(categoryController.findOne)
    .put(categoryController.update)
    .delete(categoryController.delete)

module.exports = router;