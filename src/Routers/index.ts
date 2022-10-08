import { Router } from "express";
import userRouters from "./router";

const Routers = Router();

Routers.use("/user", userRouters);

export default Routers;