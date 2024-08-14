import express from "express";

import {
  addAssociatedUser,
  userOneToMany,
  userOneToOne,
} from "../../controller/Model_Quering_Basic_Controller/association_controller.js";
const app = express.Router();

app.post("/addAssociatedUser", addAssociatedUser);
// One to One
app.get("/oneToOne", userOneToOne);
app.get("/oneToMany", userOneToMany);

export default app;
