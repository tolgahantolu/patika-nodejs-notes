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
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

//! Middleware (for password/bcrypt)
//UserSchema.pre("save", function (next) {
//  const user = this;
//  bcrypt.hash(user.password, 10, (err, hash) => {
//    user.password = hash;
//    err && console.log(err);
//    next();
//  });
//});

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

const User = model("User", UserSchema);

module.exports = User;
