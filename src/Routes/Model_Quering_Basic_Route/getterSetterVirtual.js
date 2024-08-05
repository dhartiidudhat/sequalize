import express from "express";
import {
  createUser,
  showUser,
  userRawQueries,
} from "../../controller/Model_Quering_Basic_Controller/getters_setter_virtuals.js";
const app = express.Router();

app.get("/getter", showUser);
// Validations

app.post("/createUser", createUser);

// Raw Queries
app.get("/rawQueries", userRawQueries);

export default app;
