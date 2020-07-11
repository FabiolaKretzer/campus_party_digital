import express from "express";

const routes = express.Router();

//controllers
import employeeController from "./controllers/employeeController";

routes.post("/register/employee", employeeController.create);

routes.get("/auth", (request, response) => {
  response.json({ message: "Hello World! Auth" });
});

export default routes;
