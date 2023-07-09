const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    // id column
  id: {
    type: DataTypes.INTEGER, // Set data type to integer
    allowNull: false, // Prevent null values
    primaryKey: true, // Set as primary key
    autoIncrement: true, // Automatically increment value
  },
  // category_name column
  category_name: {
    type: DataTypes.STRING, // Set data type to string
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
