import { sequelize } from "./src/config/db.js";
import "./src/Models/First-Week/index.js";

import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("---->", process.env.MY_SQL_DB_DATABASE);
    console.log("-----> DB connection has been established!");

    console.log("Attempting to sync models...");
    await sequelize.sync({ force: true });
    // await sequelize.drop();

    console.log("-----> All models were synchronized successfully.");
  } catch (error) {
    console.log("----> Unable to connect to the db!", error);
  }
})();
