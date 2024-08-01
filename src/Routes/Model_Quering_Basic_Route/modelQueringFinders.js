import express from "express";

import {
  userFindByOne,
  userFindByPk,
  userFindOrCreate,
  userFoundAndCount,
} from "../../controller/Model_Quering_Basic_Controller/model_quering_finders.js";
const app = express.Router();

app.get("/findUserByPk", userFindByPk);
app.get("/userFindByOne", userFindByOne);
app.get("/userFindOrCreate", userFindOrCreate);
app.get("/userFoundAndCount", userFoundAndCount)
export default app;
