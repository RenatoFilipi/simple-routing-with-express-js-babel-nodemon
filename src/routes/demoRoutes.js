import express from "express";
const demoRoutes = express.Router();

demoRoutes.get("/demo1", (request, response) => {
  return response.json({ msg: "get route working!" });
});

demoRoutes.post("/demo2", (request, response) => {
  console.log(request.body);
  return response.json({ msg: "post route working!" });
});

export { demoRoutes };
