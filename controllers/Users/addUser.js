const bcrypt = require("bcrypt");
const { User } = require("../../models");

module.exports = async (req, res) => {
  let { firstName, lastName, userName, password, age, ign, discordId } =
    req.body;

  let hash = await bcrypt.hash(password, 16);
  if (!hash) return res.sendStatus(500);

  try {
    await User.create({
      userName,
      firstName,
      ...(lastName && { lastName }),
      ...(discordId && { discordId }),
      ign,
      age,
      password: hash,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }

  return res.sendStatus(200);
};
