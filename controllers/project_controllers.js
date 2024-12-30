const express = require("express");
const { Project } = require("../models");
const path = require("path");


//Get All
async function ProjectGetAll(req, res) {
  const projects = await Project.findAll({raw : true});
  console.log("Data sent to HBS:", projects);

  res.render("projects", {
    projects,
    title: "My Projects",
    layout: "main",
    project: true,
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


module.exports = { ProjectGetAll, ProjectCreate };
