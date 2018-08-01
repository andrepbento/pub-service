import Pub from "../models/PubModel";

function validatePubRequest(req) {
  return req.body.name && req.body.location;
}

// Create and Save a new Pub
exports.create = (req, res) => {
  // Validate request
  if (!validatePubRequest(req)) {
    return res.status(400).send({
      message: "Pub name and location can not be empty"
    });
  }

  // Create a Pub
  const pub = new Pub({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    date: Date.now
  });

  // Save Pub in the database
  pub
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Pub."
      });
    });
};

// Retrieve and return all pubs from the database.
exports.findAll = (req, res) => {
  Pub.find()
    .then(pubs => {
      res.send(pubs);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pubs."
      });
    });
};

// Find a single pub with an id
exports.findOne = (req, res) => {
  Pub.findById(req.params.id)
    .then(pub => {
      if (!pub) {
        return res.status(404).send({
          message: "Pub not found with id " + req.params.id
        });
      }
      res.send(pub);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Pub not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving pub with id " + req.params.id
      });
    });
};

// Update a pub identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!validatePubRequest(req)) {
    return res.status(400).send({
      message: "Pub name and location can not be empty"
    });
  }

  // Find pub and update it with the request body
  Pub.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      date: Date.now,
      items: req.body.items
    },
    { new: true }
  )
    .then(pub => {
      if (!pub) {
        return res.status(404).send({
          message: "Pub not found with id " + req.params.id
        });
      }
      res.send(pub);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Pub not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating pub with id " + req.params.id
      });
    });
};

// Delete a pub with the specified id in the request
exports.delete = (req, res) => {
  Pub.findByIdAndRemove(req.params.id)
    .then(pub => {
      if (!pub) {
        return res.status(404).send({
          message: "Pub not found with id " + req.params.id
        });
      }
      res.send({ message: "Pub deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Pub not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete pub with id " + req.params.id
      });
    });
};
