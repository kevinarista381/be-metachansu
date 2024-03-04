module.exports = (app) => {
  require("./userRouter")(app);
  require("./productRouter")(app);
  require("./categoryRouter")(app);
};
