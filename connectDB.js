const Sequelize = require("sequelize");

const database = "lms_db";
const username = "postgres";
const password = "suyash8788";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

const connect = async () => {
  return sequelize.authenticate();
};

module.exports = {
  connect,
  sequelize,
};
