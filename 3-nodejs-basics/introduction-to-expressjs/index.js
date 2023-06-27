//! Express.js, Node.js için bir web framework çatısıdır. Belirli standart işleri bizim adımıza yapıyor diyebiliriz.
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Ana Sayfa");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Sayfasi");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact Sayfasi");
});

app.get("*", (req, res) => {
  res.status(404).send("Sayfa Bulunamadi");
});

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
