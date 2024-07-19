import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.MY_SQL_DB_DATABASE,
  process.env.MY_SQL_DB_USER,
  process.env.MY_SQL_DB_PASSWORD,
  {
    host: process.env.MY_SQL_DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

export const authentication = async () => {
  try {
    sequelize.authenticate();

    // sequelize.sync({ force: true });
    console.log("DB connected successfully!");
  } catch (error) {
    console.log("DB not connected!");
  }
};
