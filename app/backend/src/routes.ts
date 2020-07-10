import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  response.json("Hello World!");
});

routes.get("/auth", (request, response) => {
  response.json({ message: "Hello World! Auth" });
});

export default routes;
