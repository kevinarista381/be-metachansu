const Products = require("./Products");

module.exports = (sequelize, DataTypes) => {
  let Categories = sequelize.define("Categories", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Categories;
};
