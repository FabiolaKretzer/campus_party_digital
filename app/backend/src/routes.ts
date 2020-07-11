import express from "express";

const routes = express.Router();

//controllers
import employeeController from "./controllers/employeeController";

routes.post("/register/employee", employeeController.create);

routes.post("/login/employee", employeeController.index);

export default routes;
