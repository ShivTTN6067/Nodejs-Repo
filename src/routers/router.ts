import { Router } from "express";
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from "../controller/userController";
import { authChecker } from "../middleware/authentication";

const userRouters = Router();

userRouters.get("/", authChecker, getAllUsers);

userRouters.get("/:id", authChecker, getUser);

userRouters.post("/", authChecker, createUser);

userRouters.delete("/:id", authChecker, deleteUser);

userRouters.put("/:id", authChecker, updateUser);

export default userRouters;