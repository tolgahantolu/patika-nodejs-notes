const express = require("express");
const courseController = require("../controllers/courseController");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router
  .route("/")
  .post(roleMiddleware(["teacher", "admin"]), courseController.createCourse); //! http://localhost:3000/courses - sadece teacher veya admin rolu kurs oluşturabilir.
//router.route("/yeni").post(courseController.yeniKurs); //! http://localhost:3000/courses/yeni
router.route("/").get(courseController.getAllCourses);
router.route("/:slug").get(courseController.getCourse);

module.exports = router;
