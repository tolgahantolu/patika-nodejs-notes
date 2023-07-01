const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("strictQuery", false);

// CONNECT DB
mongoose.connect("mongodb://localhost:27017/test-db");

// CREATE SCHEMA
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

// CREATE MODEL
const Photo = mongoose.model("Photo", PhotoSchema);

// CREATE A PHOTO
Photo.create({
  title: "Learn Node.js",
  description: "Lorem ipsum mongoose with node.js",
});
