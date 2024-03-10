const login = require("../controllers/Auth/login");
const multer = require("multer");
const upload = multer();

require("dotenv").config();

module.exports = (app) => {
  app.post("/login", upload.none(), (req, res) => login(req, res));
};
