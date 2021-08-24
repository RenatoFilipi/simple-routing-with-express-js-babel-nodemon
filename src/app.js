import express from "express";
import { demoRoutes } from "./routes/demoRoutes";
const app = express();

app.use(express.json());
app.use(demoRoutes);

export { app };
