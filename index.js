import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { initialize } from "./src/config/db.js";
import { logger } from "./src/config/logger.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hoem");
});

initialize()
  .then(() => {
    logger.info("Connected db on ", process.env.PORT);
  })
  .catch((err) => {
    logger.error("errr", err);
  });

// ------------------>WOrking

// import mysql from "mysql2/promise";
// import { Sequelize } from "sequelize";

// import dotenv from "dotenv";
// import { logger } from "./src/config/logger.js";
// import pkg from "winston";
// const { info } = pkg;

// dotenv.config();
// const sequelize = new Sequelize("Blog", "root", "Harshil@11", {
//   host: "localhost",
//   dialect: "mysql",
// });

// try {
//   sequelize.authenticate().then(async () => {});
// } catch (error) {
//   console.log("second catch", error);
// }
