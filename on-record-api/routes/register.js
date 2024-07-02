var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const registerModel = require("../models/register");

/* GET register users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* POST a new registered user. */
router.post("/add", function (req, res, next) {
  let registeredUserObj = new registerModel({
    firstName: "John",
    lastName: "Smith",
  });
  registeredUserObj
    .save()
    .then((savedUser) => {
      console.log("User saved successfully:", savedUser);
      // Handle success
      res.send("User registered successfully");
    })
    .catch((error) => {
      console.error("Error saving user:", error);
      // Handle error
      res.status(500).send("Failed to register user");
    });
});

/* UPDATE an existing registered user. */
router.put("/update", function (req, res, next) {
  res.send("respond with a resource");
});

/* DELETE an existing registered user. */
router.delete("/delete", function (req, res, next) {
  res.send("respond with a resource");
});

/* SEARCH existing registered users. */
router.get("/search", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
