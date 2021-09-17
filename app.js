//3. Module Packages
const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose')


//Core Module Packages
const fs = require('fs')

//MVC Exports
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')

const app = express(); //Express JS Modülünü başlatır.

//Connect Databse with Mongoose
mongoose.connect('mongodb://localhost/smartedu-db',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log('Database connected succesfully')
})

//Template Engine
app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

//Middlewares
app.use(express.static("public"));

//Route
app.use("/", pageRoute);
app.use('/courses', courseRoute)








const port = 3000;

app.listen(port, () => {
  //Serveri çalıştırma komutu
  console.log(`App started on port ${3000}`);
});
