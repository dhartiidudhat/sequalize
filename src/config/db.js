import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pkg from "winston";
const { info } = pkg;

dotenv.config();

let database = {};

async function initialize() {
  try {
    try {
      let connection = await mysql.createPool({
        host: "localhost",
        user: "root",
        password: "Harshil@11",
        database: "Blog",
      });
      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${db}\`;`);
    } catch (error) {
      console.log("first catch", error);
    }
    try {
      const sequelize = new Sequelize("Blog", "root", "Harshil@11", {
        host: "localhost",
        dialect: "mysql",
      });

      sequelize.authenticate().then(async () => {
        const { UserModel } = await import("../models/user.model.js");
        database.User = UserModel(sequelize);

        await sequelize.sync({ force: true });
      });
    } catch (error) {
      console.log("second catch", error);
    }
  } catch (error) {
    console.log("------>something went wrong !");
  }
}

export { initialize };
