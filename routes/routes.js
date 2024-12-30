const express = require("express");
const router = express.Router();

//Index EndPoint
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    layout: "main",
  });
});

//Contact Endpoint
router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    layout: "main",
  });
});

//Projects Endpoint
router.get("/projects", (req, res) => {
  res.render("projects", {
    title: "My Projects",
    layout: "main",
    project: true,
  });
});

//Testimonials Endpoint
router.get("/testimonials", (req, res) => {
  res.render("testimonials", {
    title: "Testimonials",
    layout: "main",
  });
});

//Details Project
router.get("/detail-project", (req, res) => {
  res.render("detail-project", {
    title: "Detail Project",
    layout: "main",
  });
});

//Details Project
router.get("/project-add", (req, res) => {
  res.render("project-add", {
    title: "Add Project",
    layout: "main",
  });
});

//Details Project
router.get("/project-edit", (req, res) => {
  res.render("project-edit", {
    title: "Edit Project",
    layout: "main",
  });
});

//Not Found Endpoint
router.get("*", (req, res) => {
  res.render("404", {
    title: "Not Found",
    layout: "main",
  });
});

module.exports = router;
