const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // id column
  id: {
    type: DataTypes.INTEGER, // Set data type to integer
    allowNull: false, // Prevent null values
    primaryKey: true, // Set as primary key
    autoIncrement: true, // Automatically increment value
  },
  // tag id column
  tag_id: {
    type: DataTypes.INTEGER, // Set data type to integer
    references: { // Create a reference to the tag model's id column
      model: 'tag',
      key: 'id',
    },
  },
  // product id column
  product_id: {
    type: DataTypes.INTEGER, // Set data type to integer
    references: { // Create a reference to the product model's id column
      model: 'product',
      key: 'id',
    },
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
