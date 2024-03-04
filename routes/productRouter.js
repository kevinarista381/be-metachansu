require("dotenv").config();
const multer = require("multer");
const fs = require("fs");
const { Products } = require("../models");
module.exports = (app) => {
  let upload = multer({ dest: "files/" });

  app.get("/product", async (req, res) => {
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
  });

  app.post("/product", upload.single("image"), async (req, res) => {
    let { name, price, stock, category_id } = req.body;
    let readImageFile = (file) => {
      let bitmap = fs.readFileSync(file);
      let buffer = new Buffer.from(bitmap);
      return buffer;
    };

    let image = readImageFile(req.file.path);

    try {
      await Products.create({
        name,
        price,
        stock,
        category_id,
        ...(image && { image }),
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
    return res.sendStatus(200);
  });

  app.delete("/product/:id", async (req, res) => {
    let { id } = req.params;
    try {
      await Products.destroy({ where: { id: id } });
    } catch (err) {
      return res.status(500).send(err.message);
    }
    return res.sendStatus(200);
  });

  app.put("/product/:id", upload.single("image"), async (req, res) => {
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
  });
};
