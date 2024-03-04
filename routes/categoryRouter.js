require("dotenv").config();

const { Categories } = require("../models");
module.exports = (app) => {
  app.get("/category", async (req, res) => {
    try {
      let categories = await Categories.findAll();
      if (categories.length <= 0) return res.sendStatus(404);

      res.status(200).json(categories);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  app.post("/category", async (req, res) => {
    let { name } = req.body;

    try {
      await Categories.create({
        name,
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
    return res.sendStatus(200);
  });

  app.delete("/category/:id", async (req, res) => {
    let { id } = req.params;
    try {
      await Categories.destroy({ where: { id: id } });
    } catch (err) {
      return res.status(500).send(err.message);
    }
    return res.sendStatus(200);
  });

  app.put("/category/:id", async (req, res) => {
    let { name } = req.body;
    let { id } = req.params;

    try {
      Categories.update({
        where: {
          id: id,
        },
      });
    } catch (err) {
      return res.status(500).send(err.message);
    }
    return res.sendStatus(200);
  });
};
