const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const Category = require("../models/Category");
const Course = require("../models/Course");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect("/login");
    //res.status(201).json({
    //  status: "success",
    //  user,
    //});
  } catch (error) {
    const errors = validationResult(req);
    console.log(errors);
    for (let i = 0; i < errors.array().length; i++) {
      console.log(errors.array()[i].msg);
    }
    // show error popup
    res.status(400).redirect("/register");
    //res.status(400).json({
    //  status: "fail",
    //  error,
    //});
    //console.log(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    await Course.deleteMany({ user: req.params.id });

    res.status(200).redirect("/users/dashboard");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const same = bcrypt.compare(password, user.password);
      if (same) {
        //! USER SESSION
        req.session.userID = user._id;
        res.status(200).redirect("/users/dashboard");
      } else {
        console.log("Your password is not correct!");
        res.status(400).redirect("/login");
      }
    } else {
      console.log("User is not exist!");
      res.status(400).redirect("/login");
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error.message);
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

exports.getDashboardPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userID }).populate(
    "courses"
  );
  const categories = await Category.find();
  const courses = await Course.find({ user: req.session.userID });
  const users = await User.find({});
  res.status(200).render("dashboard", {
    user,
    categories,
    courses,
    page_name: "dashboard",
    users,
  });
};
