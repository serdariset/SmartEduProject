//3. Module Packages
const express = require("express");
const ejs = require("ejs");
const { aboutPage } = require("./controllers/pageControllers");

//Core Module Packages
const fs = require('fs')

//MVC Exports
const pageControllers = require('./controllers/pageControllers')

const app = express(); //Express JS Modülünü başlatır.

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Route
app.get("/", (req, res) => {
  res.status(200).render("index",
        {page_name:'index'}
    );
});

app.get("/about", pageControllers.aboutPage);








const port = 3000;

app.listen(port, () => {
  //Serveri çalıştırma komutu
  console.log(`App started on port ${3000}`);
});
