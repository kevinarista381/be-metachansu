const { Products } = require("../../models");
const fs = require("fs");
module.exports = async (req, res) => {
  let { name, price, stock, category_id } = req.body;
  let { id } = req.params;
  let readImageFile = (file) => {
    let bitmap = fs.readFileSync(file);
    let buffer = new Buffer.from(bitmap);
    return buffer;
  };

  let image = readImageFile(req.file.path);

  try {
    await Products.update(
      {
        name,
        price,
        stock,
        category_id,
        ...(image && { image }),
      },
      {
        where: {
          id,
        },
      }
    );
  } catch (err) {
    return res.status(500).send(err.message);
  }
  return res.sendStatus(200);
};
