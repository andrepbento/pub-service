import StarRating from "../models/StarRatingModel";

function validateStarRatingRequest(req) {
  return req.body.numberOfStars && req.body.author;
}

// Create and Save a new StarRating
exports.create = (req, res) => {
  // Validate request
  if (!validateStarRatingRequest(req)) {
    return res.status(400).send({
      message: "StarRating numberOfStars and author can not be empty"
    });
  }

  // Create a StarRating
  const starRating = new StarRating({
    numberOfStars: req.body.numberOfStars,
    detail: req.body.detail,
    created: Date.now,
    author: req.body.author
  });

  // Save StarRating in the database
  starRating
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the StarRating."
      });
    });
};

// Retrieve and return all star ratings from the database.
exports.findAll = (req, res) => {
  StarRating.find()
    .then(starRatings => {
      res.send(starRatings);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving star ratings."
      });
    });
};

// Find a single star rating with an id
exports.findOne = (req, res) => {
  StarRating.findById(req.params.id)
    .then(starRating => {
      if (!starRating) {
        return res.status(404).send({
          message: "StarRatings not found with id " + req.params.id
        });
      }
      res.send(starRating);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "StarRating not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving StarRating with id " + req.params.id
      });
    });
};

// Update a StarRatings identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!validateStarRatingRequest(req)) {
    return res.status(400).send({
      message: "StarRating numberOfStars and author can not be empty"
    });
  }

  // Find StarRating and update it with the request body
  StarRating.findByIdAndUpdate(
    req.params.id,
    {
      numberOfStars: req.body.numberOfStars,
      detail: req.body.detail,
      created: Date.now,
      author: req.body.author
    },
    { new: true }
  )
    .then(starRating => {
      if (!starRating) {
        return res.status(404).send({
          message: "StarRating not found with id " + req.params.id
        });
      }
      res.send(starRating);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "StarRating not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating StarRating with id " + req.params.id
      });
    });
};

// Delete a StarRating with the specified id in the request
exports.delete = (req, res) => {
  StarRating.findByIdAndRemove(req.params.id)
    .then(starRating => {
      if (!starRating) {
        return res.status(404).send({
          message: "StarRating not found with id " + req.params.id
        });
      }
      res.send({ message: "StarRating deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "StarRating not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete StarRating with id " + req.params.id
      });
    });
};
