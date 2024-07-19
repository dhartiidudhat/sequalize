import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

import { sequelize } from "./src/config/db.js";
// import "./src/Models/Model_Basic/index.js";
import "./src/Models/Model_Instance/index.js";
import routes from "./src/Routes/userRoutes.js";

app.use("/api", routes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("---->", process.env.MY_SQL_DB_DATABASE);
    console.log("-----> DB connection has been established!");

    console.log("Attempting to sync models...");
    // await sequelize.sync({ force: true });
    // await sequelize.drop();

    console.log("-----> All models were synchronized successfully.");
  } catch (error) {
    console.log("----> Unable to connect to the db!", error);
  }
})();

app.listen(process.env.PORT, () => {
  console.log("=---->port listen on port ", process.env.PORT);
});
