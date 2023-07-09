// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: { // id column
      type: DataTypes.INTEGER, // Set data type to integer
      allowNull: false, // Prevent null values
      primaryKey: true, // Set as primary key
      autoIncrement: true, // Automatically increment value
  },
  product_name: { // product_name column
    type: DataTypes.STRING, // Set data type to string
    allowNull: false, // Prevent null values
  },
  price: { // price column
    type: DataTypes.DECIMAL, // Set data type to decimal
    allowNull: false, // Prevent null values
    validate: { // Validate that the value is a decimal
      isDecimal: true,
    },
  },
  stock: { // stock column
    type: DataTypes.INTEGER, // Set data type to integer
    allowNull: false, // Prevent null values
    defaultValue: 10, // Set default value to 10
    validate: { // Validate that the value is numeric
      isNumeric: true,
    },
  },
  category_id: { // category_id column
    type: DataTypes.INTEGER, // Set data type to integer
    references: { // Create a reference to the category model's id column
      model: 'category',
    },
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
