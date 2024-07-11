import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("Blog", "root", "Harshil@11", {
  host: process.env.MY_SQL_DB_HOST,
  dialect: "mysql",
});
