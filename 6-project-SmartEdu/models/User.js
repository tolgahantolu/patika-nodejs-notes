const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    default: "student",
  },
});

//! Middleware (for password/bcrypt)
UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    err && console.log(err);
    next();
  });
});

const User = model("user", UserSchema);

module.exports = User;
