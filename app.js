//3. Module Packages
const express = require("express");

//Core Module Packages



const app = express(); //Express JS Modülünü başlatır.

app.get("/", (req, res) => {
  res.status(200).send("index");
});

const port = 3000;

app.listen(port, () => {
  //Serveri çalıştırma komutu
  console.log(`App started on port ${3000}`);
});
