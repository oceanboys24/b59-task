const express = require("express");
const router = express.Router();

//Index EndPoint
router.get("/", (req, res) => {
  res.render("index");
});

//Contact Endpoint
router.get("/contact", (req, res) => {
  res.render("contact");
});

//Projects Endpoint
router.get("/projects", (req, res) => {
  res.render("projects");
});

//Testimonials Endpoint
router.get("/testimonials", (req, res) => {
  res.render("index");
});

//Not Found Endpoint
router.get("*", (req, res) => {
  res.send("Not Found")
});

module.exports = router;
