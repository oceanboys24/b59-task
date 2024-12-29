const express = require("express");
const app = express();
const port = 3000;
const path = require('path')

const routes =require('./routes/routes')


//Import Static File
app.use(express.static(path.join(__dirname, 'views')))


app.use('/', routes)


app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
