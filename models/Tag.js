const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    // id column
  id: {
    type: DataTypes.INTEGER, // Set data type to integer
    allowNull: false, // Prevent null values
    primaryKey: true, // Set as primary key
    autoIncrement: true, // Automatically increment value
  },
  // tag_name column
  tag_name: {
    type: DataTypes.STRING, // Set data type to string
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
