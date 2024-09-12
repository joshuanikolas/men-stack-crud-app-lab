const mongoose = require('mongoose')
const express = require("express")
const app = express()

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
})

const Food = mongoose.model('Food', plantSchema)
module.exports = Food



app.listen(3000, () => {
    console.log("Listening on port 3000")
})


app.get
