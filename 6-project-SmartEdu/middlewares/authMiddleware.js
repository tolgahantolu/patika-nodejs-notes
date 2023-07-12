const User = require("../models/User");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.session.userID);
  if (!user) res.redirect("/login");
  next();
};
//module.exports = (req, res, next) => {
//  User.findById(req.session.userID)
//    .then((user) => {
//      if (!user) return res.redirect("/login");
//    })
//    .catch((err) => alert("Error", err.message));
//  next();
//};
