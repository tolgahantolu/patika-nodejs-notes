const { Schema, model } = require("mongoose");
var slugify = require("slugify");

const CourseSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  slug: { type: String, unique: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" }, //! Kurslar ve kategoriler arasında bir ilişki var
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

// Middleware (for slug)
CourseSchema.pre("validate", async function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Course = model("Course", CourseSchema);

module.exports = Course;
