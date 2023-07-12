const express = require("express");
const pageController = require("../controllers/pageController");
const redirectMiddleware = require("../middlewares/redirectMiddleware");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
//prettier-ignore
router.route("/register").get(redirectMiddleware, pageController.getRegisterPage); //! önce redirectMiddleware'i kontrol edecek
router.route("/login").get(redirectMiddleware, pageController.getLoginPage);

module.exports = router;
