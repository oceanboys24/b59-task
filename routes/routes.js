const express = require("express");
const router = express.Router();
const {
  ProjectGetAll,
  ProjectCreate,
  ProjectDetail,
  ProjectDelete,
  ProjectGetEdit,
  ProjectEdit,
} = require("../controllers/project_controllers");
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
router.get("/projects", ProjectGetAll);

// Add Project Endpoint
router.post("/add-project", ProjectCreate);

// Delete Project Endpoint
router.delete("/delete-project/:id", ProjectDelete);

//Testimonials Endpoint
router.get("/testimonials", (req, res) => {
  res.render("testimonials", {
    title: "Testimonials",
    layout: "main",
  });
});

//Details Project
router.get("/detail-project/:id", ProjectDetail);

//Endpoint Add Project
router.get("/project-add", (req, res) => {
  res.render("project-add", {
    title: "Add Project",
    layout: "main",
  });
});

//Edit Project
router.get("/project-edit/:id", ProjectGetEdit);
router.post("/project-edit/:id", ProjectEdit);

//Not Found Endpoint
router.get("*", (req, res) => {
  res.render("404", {
    title: "Not Found",
    layout: "main",
  });
});

module.exports = router;
