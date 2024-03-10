require("dotenv").config();

module.exports = (app) => {
  app.post("/login", (req, res) => {
    let { userName, password } = req.body;
  });
};
