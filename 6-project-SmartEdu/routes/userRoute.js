const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.createUser); //! .../users/signup
router.route("/login").post(authController.loginUser); //! .../users/signup
router.route("/logout").get(authController.logoutUser); //! .../users/signup

module.exports = router;
