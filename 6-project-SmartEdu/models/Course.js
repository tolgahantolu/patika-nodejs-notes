const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Course = model("course", CourseSchema);

module.exports = Course;
