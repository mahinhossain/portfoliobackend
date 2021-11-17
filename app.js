const express = require("express");
const app = express();
app.use(express.json());
const User = require("./UserModel");

const morgan = require("morgan");

app.use(express.json());

app.use(express.json());
app.use(morgan("dev"));

app.post("/", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = app;
