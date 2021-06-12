const express = require("express");
const app = express();
const path = require('path');
// for partials we have to required hbs module
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// Public static path
const staticPath = path.join(__dirname, "../public");

// Templates > views path
const templatePath = path.join(__dirname, "../templates/views");

// Partials Path
const partialsPath =  path.join(__dirname, "../templates/partials");

// ///////////////////////////////////////////////


// To use hbs View engine
app.set('view engine', 'hbs');

// Change the folder name from views to templates
app.set('views', templatePath)

// To use static file
app.use(express.static(staticPath));

// To use partials
hbs.registerPartials(partialsPath);




// Routing 
app.get("/", (req, res) => {
  res.render('index');
});
app.get("/about", (req, res) => {
  res.render('about');
});
app.get("/weather", (req, res) => {
  res.render("Weather");
});


// For any other url
app.get("*", (req, res) => {
    res.render("404", {
      errorMsg:'Opps! Page Not Found'
    });
});
app.get("/about/*", (req, res) => {
    res.render("404", {
      errorMsg:'Opps! Page Not Found'
    });
});

// Ling the port
app.listen(port, () => {
  console.log(`Listing on the port ${port}`);
});
