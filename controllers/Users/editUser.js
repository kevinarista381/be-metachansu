const { User } = require("../../models");
module.exports = async (req, res) => {
  let { firstName, lastName, userName, age, ign, discordId } = req.body;

  try {
    await User.update({
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
};
