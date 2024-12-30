const express = require("express");
const app = express();
const hbs = require("express-hbs");
const port = 3000;
const path = require("path");
const routes = require("./routes/routes");


//Import Static File
app.use(express.static(path.join(__dirname, "views")));

//Setup HBS + Template Engine
app.engine(
  "hbs",
  hbs.express4({
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//Import Endpoint
app.use("/", routes);

//Run App
app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
