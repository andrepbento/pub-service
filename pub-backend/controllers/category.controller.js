import Category from "../models/CategoryModel";

// Create and Save a new Category
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name && !req.body.description) {
    return res.status(400).send({
      message: "Category name and description can not be empty"
    });
  }

  // Create a Category
  const category = new Category({
    name: req.body.name,
    description: req.body.description
  });

  // Save Category in the database
  category
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
};

// Retrieve and return all categories from the database.
exports.findAll = (req, res) => {
  Category.find()
    .then(categories => {
      res.send(categories);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};

// Find a single category with an id
exports.findOne = (req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found with id " + req.params.id
        });
      }
      res.send(category);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving category with id " + req.params.id
      });
    });
};

// Update a category identified by the categoryId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name && !req.body.description) {
    return res.status(400).send({
      message: "Category name and description can not be empty"
    });
  }

  // Find category and update it with the request body
  Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description
    },
    { new: true }
  )
    .then(category => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found with id " + req.params.id
        });
      }
      res.send(category);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating category with id " + req.params.id
      });
    });
};

// Delete a category with the specified categoryId in the request
exports.delete = (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then(category => {
      if (!category) {
        return res.status(404).send({
          message: "Category not found with id " + req.params.id
        });
      }
      res.send({ message: "Category deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Category not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete category with id " + req.params.id
      });
    });
};
