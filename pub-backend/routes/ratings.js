import express from "express";
var router = express.Router();

const starRatingsController = require("../controllers/StarRating.controller");

router
  .route("/")
  .get(starRatingsController.findAll)
  .post(starRatingsController.create);

router
  .route("/:id")
  .get(starRatingsController.findOne)
  .put(starRatingsController.update)
  .delete(starRatingsController.delete);

module.exports = router;
