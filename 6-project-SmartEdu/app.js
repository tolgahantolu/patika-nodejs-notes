const express = require("express");
const { connect } = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");

const app = express();

//! Connect DB
connect("mongodb://localhost/smartedu-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB Connected Successfuly 🥳"));

//! TEMPLATE ENGINE
app.set("view engine", "ejs");

//! MIDDLEWARES
app.use(express.static("public"));

//! ROUTES
app.use("/", pageRoute); //! anlamı şu: / ile başlayan bir istek geldiğinde bunu pageRoute'a gönder...
app.get("/courses", courseRoute); //! anlamı şu: /courses ile başlayan bir istek geldiğinde bunu courseRoute'a gönder...

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port} 🚀`);
});
