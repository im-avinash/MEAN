const express = require("express");
const bodyParser = require("body-parser");
const debug = require("debug")("node-angular");
const mongoose = require("mongoose");
const router = require("./routes/posts");

const app = express();

mongoose
  .connect(
    "mongodb+srv://avinash:ufuqUYgoeR7LdyG7@cluster0.2vzf3.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-with,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  next();
});

app.use("/api/posts", router);

module.exports = app;

//MongoDB cloud database password : ufuqUYgoeR7LdyG7
