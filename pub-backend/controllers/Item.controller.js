import Item from "../models/ItemModel";

function validateItemRequest(req) {
  return req.body.name && req.body.price && req.body.category;
}

// Create and Save a new Item
exports.create = (req, res) => {
  // Validate request
  if (!validateItemRequest(req)) {
    return res.status(400).send({
      message: "Item name, price and category can not be empty"
    });
  }

  // Create an Item
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    date: Date.now,
    category: req.body.category
  });

  // Save Item in the database
  item
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Item."
      });
    });
};

// Retrieve and return all items from the database.
exports.findAll = (req, res) => {
  Item.find()
    .then(items => {
      res.send(items);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving items."
      });
    });
};

// Find a single item with an id
exports.findOne = (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (!item) {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id
        });
      }
      res.send(item);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving item with id " + req.params.id
      });
    });
};

// Update an item identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!validateItemRequest(req)) {
    return res.status(400).send({
      message: "Item name, price and category can not be empty"
    });
  }

  // Find item and update it with the request body
  Item.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      date: Date.now,
      category: req.body.category,
      ratings: req.body.ratings
    },
    { new: true }
  )
    .then(item => {
      if (!item) {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id
        });
      }
      res.send(item);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating item with id " + req.params.id
      });
    });
};

// Delete a item with the specified id in the request
exports.delete = (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(item => {
      if (!item) {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id
        });
      }
      res.send({ message: "Item deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Item not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete item with id " + req.params.id
      });
    });
};
