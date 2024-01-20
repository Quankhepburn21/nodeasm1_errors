const Authentication = require("../models/userToken");
// Kết nối tc số 9
exports.authentication = (req, res, next) => {
  let auth = req.query.userToken;
  Authentication.getUserToken((users) => {
    const user = users.find((item) => item.token === auth);
    if (user) {
      next();
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  });
};
