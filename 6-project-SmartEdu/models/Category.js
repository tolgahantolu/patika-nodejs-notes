const { Schema, model } = require("mongoose");
var slugify = require("slugify");

const CategorySchema = new Schema({
  name: { type: String, unique: true, required: true },
  slug: { type: String, unique: true },
});

// Middleware (for slug)
CategorySchema.pre("validate", async function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Category = model("category", CategorySchema);

module.exports = Category;
