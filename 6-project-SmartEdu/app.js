const express = require("express");
const session = require("express-session");
const { connect } = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");

const app = express();

//! Connect DB
connect("mongodb://localhost/smartedu-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB Connected Successfuly 🥳"));

//! TEMPLATE ENGINE
app.set("view engine", "ejs");

//! GLOBAL VARIABLES
global.userIN = null;

//! MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
  })
);

//! ROUTES
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/", pageRoute); //! anlamı şu: / ile başlayan bir istek geldiğinde bunu pageRoute'a gönder...
app.use("/courses", courseRoute); //! anlamı şu: /courses ile başlayan bir istek geldiğinde bunu courseRoute'a gönder...
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port} 🚀`);
});
