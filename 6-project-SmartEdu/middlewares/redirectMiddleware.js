module.exports = (req, res, next) => {
  if (userIN) res.redirect("/");
  next();
};
