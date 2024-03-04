require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

require("./routes")(app);

db.sequelize.sync().then((req) => {
  app.listen(process.env.PORT, () => {
    console.log(`Metachansu server is up at ${process.env.PORT}`);
  });
});
