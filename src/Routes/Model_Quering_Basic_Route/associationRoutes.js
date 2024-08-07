import express from "express";

import { userOneToOne } from "../../controller/Model_Quering_Basic_Controller/association_controller.js";
const app = express.Router();

// One to One
app.get("/oneToOne", userOneToOne);

export default app;
