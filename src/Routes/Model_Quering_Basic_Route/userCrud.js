import express from "express";
import {
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "../../controller/Model_Quering_Basic_Controller/User_controller.js";
import {
  addUserBasedOnFields,
  getUserBasedOnAttributes,
  giveTheAlias,
} from "../../controller/Model_Quering_Basic_Controller/User1_controller.js";
const app = express.Router();

app.get("/getUser", getUser);
app.post("/addUser", addUser);
app.put("/updateUser/:id", updateUser);
app.delete("/deleteUser/:id", deleteUser);

// Second Video-7

app.post("/addUserBasedOnFields", addUserBasedOnFields);
app.get("/getUserBOAttribute", getUserBasedOnAttributes);
app.get("/getAlias", giveTheAlias);

export default app;
