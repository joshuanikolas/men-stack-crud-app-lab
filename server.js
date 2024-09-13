const dotenv = require("dotenv");
dotenv.config()

const mongoose = require('mongoose');
const express = require("express");
const app = express();

process.env.MONGODB_URI = 'mongodb+srv://joshuanikolass:Bebee0904.@joshuanikolass.8y5s8.mongodb.net/Foods?retryWrites=true&w=majority&appName=joshuanikolass'
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB`);
  });
  

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
})

const Food = mongoose.model('Food', foodSchema)
module.exports = Food


app.get("/test", (req, res) => {
    res.send("testing")
});


app.get("/", async (req, res) => {
    res.render("index.ejs")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
});