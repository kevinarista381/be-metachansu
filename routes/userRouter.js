require("dotenv").config();
const multer = require("multer");
const upload = multer();
const addUser = require("../controllers/Users/addUser");
const deleteUser = require("../controllers/Users/deleteUser");
const editUser = require("../controllers/Users/editUser");
const getUsers = require("../controllers/Users/getUsers");

module.exports = (app) => {
  app.get("/user", (req, res) => getUsers(req, res));

  app.post("/user", upload.none(), (req, res) => addUser(req, res));

  app.delete("/user", (req, res) => deleteUser(req, res));

  app.put("/user/:id", upload.none(), (req, res) => editUser(req, res));
};
