const dotenv = require("dotenv");
dotenv.config(); 
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB`);
});

const Food = require("./models/food.js");



app.get("/", async (req, res) => {
  res.send("TESTING");
});

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/foods/new", (req, res) => {
  res.render("fruits/new.ejs");
});






app.listen(3000, () => {
  console.log("Listening on port 3000");
});




























