import express from "express";
import {
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "../../controller/Model_Quering_Basic_Controller/User_controller.js";
const app = express.Router();

app.get("/getUser", getUser);
app.post("/addUser", addUser);
app.put("/updateUser/:id", updateUser);
app.delete("/deleteUser/:id", deleteUser);
export default app;
