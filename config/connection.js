// Require the dotenv package so we can use the variables we set in the .env file
require('dotenv').config();
// Require the Sequelize constructor
const Sequelize = require('sequelize');
// Create a connection to our database, pass in your MySQL information for username and password
// JAWSDB_URL is an environment variable that Heroku will automatically create and execute for us when we deploy our application.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// Export the connection
module.exports = sequelize;
