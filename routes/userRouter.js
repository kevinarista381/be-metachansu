require("dotenv").config();
const addUser = require("../controllers/Users/addUser");
const deleteUser = require("../controllers/Users/deleteUser");
const editUser = require("../controllers/Users/editUser");
const getUsers = require("../controllers/Users/getUsers");

module.exports = (app) => {
  app.get("/user", async (req, res) => getUsers(req, res));

  app.post("/user", async (req, res) => addUser(req, res));

  app.delete("/user", async (req, res) => deleteUser(req, res));

  app.put("/user", async (req, res) => editUser(req, res));
};
