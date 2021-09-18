//3. Module Packages
const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose')


//Core Module Packages
const fs = require('fs')

//MVC Exports
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')

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
app.use("/", pageRoute); //get istekleri (index,about,courses)
app.use('/courses', courseRoute) //post isteği
app.use('/categories',categoryRoute)
app.use('/users',userRoute)









const port = 3000;

app.listen(port, () => {
  //Serveri çalıştırma komutu
  console.log(`App started on port ${3000}`);
});
