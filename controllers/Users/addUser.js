const { User } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  let { firstName, lastName, userName, age, ign, discordId, password } =
    req.body;
  let salt = await bcrypt.genSaltSync(10);
  let hash = await bcrypt.hashSync(password, salt);
  console.log(hash);

  try {
    await User.create({
      userName,
      firstName,
      ...(lastName && { lastName }),
      ...(discordId && { discordId }),
      ign,
      age,
      password: hash,
      salt,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
  return res.sendStatus(200);
};
