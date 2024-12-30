const { Where } = require("sequelize/lib/utils");
const { Project } = require("../models");

//Get All
async function ProjectGetAll(req, res) {
  const projects = await Project.findAll({ raw: true });

  res.render("projects", {
    projects,
    title: "My Projects",
    layout: "main",
    isProject: true,
  });
}

//Create
async function ProjectCreate(req, res) {
  const { ProjectName, StartDate, EndDate, Description, Stack, Image } =
    req.body;

  try {
    await Project.create({
      name: ProjectName,
      startDate: StartDate,
      endDate: EndDate,
      description: Description,
      stack: Array.isArray(Stack) ? Stack : [Stack],
      image: Image,
    });

    res.redirect("/projects");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// Details
async function ProjectDetail(req, res) {
  try {
    const project = await Project.findByPk(req.params.id, { raw: true });
    if (!project) {
      return res.render("404", {
        title: "Project Not Found",
        layout: "main",
      });
    }
    res.render("detail-project", {
      project,
      title: "Detail Project",
      layout: "main",
    });
  } catch (error) {
    res.render("404", {
      title: "Not Found",
      layout: "main",
    });
  }
}

//Delete
async function ProjectDelete(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Project ID is required" });
    }

    const deletedCount = await Project.destroy({ where: { id } });

    if (deletedCount === 0) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: "Error deleting project" });
  }
}

module.exports = { ProjectGetAll, ProjectCreate, ProjectDetail, ProjectDelete };
