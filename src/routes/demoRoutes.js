import express from "express";
const demoRoutes = express.Router();
import { demoController } from "../Controllers/DependencyResolver";

demoRoutes.get("/get", (request, response) => {
  return demoController.get(request, response);
});

demoRoutes.post("/post", (request, response) => {
  return demoController.post(request, response);
});

export { demoRoutes };
