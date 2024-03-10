const { User } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  let { userName, password } = req.body;

  try {
    let user = await User.findOne({ where: { userName: userName } });
    if (!user) return res.status(404).send("User not found!");

    bcrypt.compare(password, user.dataValues.password, (err, result) => {
      if (err) return res.sendStatus(500);
      if (result) {
        return res.sendStatus(200);
      }
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
