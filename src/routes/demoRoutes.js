import express from "express";
const demoRoutes = express.Router();
import { demoController } from "../utils/DependencyResolver";

demoRoutes.get("/get", (request, response) => {
  return demoController.get(request, response);
});

demoRoutes.post("/post", (request, response) => {
  console.log(request.body);
  return demoController.post(request, response);
});

export { demoRoutes };
