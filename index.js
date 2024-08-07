import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(bodyParser.json());

import { authentication, sequelize } from "./src/config/db.js";
import "./src/config/associations.js";
// import "./src/models/Model_Basic/index.js";

import { model_quering_basic, model_user_contact } from "./src/models/index.js";

import Route from "./src/Routes/index.js";
import bodyParser from "body-parser";

app.use("/api", Route);

(async () => {
  await authentication();
})();

app.listen(process.env.PORT, () => {
  console.log("Port listen on", process.env.PORT);
});
