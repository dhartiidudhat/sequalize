import { sequelize } from "./src/config/db.js";
import Emp from "./src/Models/First-Week/emp.js";
import User from "./src/Models/First-Week/user.js";
import UserTest from "./src/Models/First-Week/user_test.js";
import UserOne from "./src/Models/First-Week/user_class.js";
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
