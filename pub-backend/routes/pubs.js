import express from "express";
var router = express.Router();

const pubsController = require("../controllers/Pub.controller");

router
  .route("/")
  .get(pubsController.findAll)
  .post(pubsController.create);

router
  .route("/:id")
  .get(pubsController.findOne)
  .put(pubsController.update)
  .delete(pubsController.delete);

module.exports = router;
