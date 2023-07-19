const nodemailer = require("nodemailer");
const Course = require("../models/Course");
const User = require("../models/User");

exports.getIndexPage = async (req, res) => {
  const courses = await Course.find().sort("-createdAt").limit(2);
  const totalCourses = await Course.find().countDocuments();
  const totalStudents = await User.countDocuments({ role: "student" });
  const totalTeachers = await User.countDocuments({ role: "teacher" });

  res.status(200).render("index", {
    page_name: "index",
    courses,
    totalCourses,
    totalStudents,
    totalTeachers,
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};

exports.sendEmail = async (req, res) => {
  const outputMessage = `
	<h1>Mail Details</h1>
	<ul>
		<li>Full Name: ${req.body.name}</li>
		<li>Email: ${req.body.email}</li>
	</ul>
	<h3>Message</h3>
	<p>${req.body.message}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: process.env.SECURE,
    auth: {
      user: process.env.MAIL_ADRESS, //account
      pass: process.env.PASSWORD, // password
    },
  });

  const info = await transporter.sendMail({
    from: `"Smart EDU Contact Form" ${process.env.MAIL_ADRESS}`, // sender address
    to: process.env.MAIL_ADRESSTO, // list of receivers
    subject: "New Message for Smart EDU ✔", // Subject line
    html: outputMessage, // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.status(200).redirect("/contact");
};
