import express from "express";
const app = express.Router();

import model_instance_routes from "./Model_Instane_Route/userRoutes.js";
import model_Quering_Basic_Route from "./Model_Quering_Basic_Route/userCrud.js";
import model_finders from "./Model_Quering_Basic_Route/modelQueringFinders.js";
import model_getter_setter_virtuals from "./Model_Quering_Basic_Route/getterSetterVirtual.js";
import model_association from "./Model_Quering_Basic_Route/associationRoutes.js";

app.use("/modelInstance", model_instance_routes);
app.use("/modelQueringBasic", model_Quering_Basic_Route);
app.use("/finders", model_finders);
app.use("/GSV", model_getter_setter_virtuals);
app.use("/association", model_association);
export default app;
