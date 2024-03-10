const { User } = require("../../models");
const Op = require("sequelize").Op;

module.exports = async (req, res) => {
  let { id, firstName, userName } = req.query;
  console.log(userName);

  try {
    await User.destroy({
      where: {
        [Op.or]: [
          {
            id: {
              [Op.eq]: id,
            },
          },
          {
            firstName: {
              [Op.eq]: firstName,
            },
          },
          {
            userName: {
              [Op.eq]: userName,
            },
          },
        ],
      },
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
  return res.sendStatus(200);
};
