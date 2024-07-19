import express from "express";
import { userget } from "../../controller/Model_Instance_Controller/user.js";
import { User2, addUser } from "../../controller/Model_Instance_Controller/index.js";
const routes = express.Router();

routes.get("/hey", userget);
routes.get("/getUser", addUser);
routes.get("/user2", User2);
export default routes;
