const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors middleware
app.use(cors());
app.use(express.json());

const DB = "mongodb://localhost:27017/";

mongoose
  .connect(DB)
  .then(() => {
    console.log("CONNECTION SUCESSFUL");
  })
  .catch((err) => {
    console.log(err, "CONNECTION UNSUCESSFUL");
  });

app.listen(1337, () => {
  console.log("Server running on port 1337");
});
