import express from "express";
import {
  createUser,
  showUser,
} from "../../controller/Model_Quering_Basic_Controller/getters_setter_virtuals.js";
const app = express.Router();

app.get("/getter", showUser);
app.post("/createUser", createUser);

export default app;
