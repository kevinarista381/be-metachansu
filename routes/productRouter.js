require("dotenv").config();
const multer = require("multer");
const getProduct = require("../controllers/Products/getProduct");
const addProduct = require("../controllers/Products/addProduct");
const deleteProduct = require("../controllers/Products/deleteProduct");
const editProducts = require("../controllers/Products/editProduct");
module.exports = (app) => {
  let upload = multer({ dest: "files/" });

  app.get("/product", (req, res) => getProduct(req, res));

  app.post("/product", upload.single("image"), (req, res) =>
    addProduct(req, res)
  );

  app.delete("/product/:id", (req, res) => deleteProduct(req, res));

  app.put("/product/:id", upload.single("image"), (req, res) =>
    editProducts(req, res)
  );
};
