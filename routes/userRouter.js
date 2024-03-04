require("dotenv").config();
const { User } = require("../models");
module.exports = (app) => {
  app.get("/user", async (req, res) => {
    try {
      let users = await User.findAll();
      if (users.length <= 0) return res.sendStatus(404);
      res.status(200).json(users);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  app.post("/user", async (req, res) => {
    let { firstName, lastName, userName, age, ign, discordId } = req.body;

    try {
      await User.create({
        userName: userName,
        firstName: firstName,
        ...(lastName && { lastName: lastName }),
        ...(discordId && { discordId: discordId }),
        ign: ign,
        age: age,
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
    return res.sendStatus(200);
  });
};
