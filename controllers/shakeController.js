var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var shakes = require("../models/shake.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  shakes.all(function(data) {
    var hbsObject = {
      shakes: data
    };
    console.log('hbsObject: ', hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/shakes", function(req, res) {
  shakes.create([
    "Shake", "Drank"
  ], [
    req.body.name, req.body.drankState
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/shakes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log('req.body ', req.body);
  shakes.update({
    Drank: req.body.drankState
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/shakes/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  shakes.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
