import express from "express";
const app = express.Router();

import model_instance_routes from "./Model_Instane_Route/userRoutes.js";
import model_Quering_Basic_Route from "./Model_Quering_Basic_Route/userCrud.js";

app.use("/modelInstance", model_instance_routes);
app.use("/modelQueringBasic", model_Quering_Basic_Route);

export default app;
