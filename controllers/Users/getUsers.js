const { User } = require("../../models");
module.exports = async (req, res) => {
  try {
    let users = await User.findAll();
    if (users.length <= 0) return res.sendStatus(404);
    res.status(200).json(users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
