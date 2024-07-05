import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Blog", "root", "Harshil@1104", {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("-----> DB connection has been established !");
} catch (error) {
  console.log("----> Unable to connect the db !");
}
