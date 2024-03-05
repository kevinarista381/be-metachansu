const { Products } = require("../../models");
module.exports = async (req, res) => {
  try {
    let result = await Products.findAll();
    if (result.length <= 0) return res.sendStatus(404);
    let products = result.map((item) => {
      let base64 = item?.image ? item.image.toString("base64") : null;
      item.image = base64;
      return item;
    });

    res.status(200).json(products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
