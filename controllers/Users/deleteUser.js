const { User } = require("../../models");
module.exports = async (req, res) => {
  let { id } = req.params;

  try {
    await User.destroy({ where: { id: id } });
  } catch (err) {
    return res.status(500).send(err.message);
  }
  return res.sendStatus(200);
};
