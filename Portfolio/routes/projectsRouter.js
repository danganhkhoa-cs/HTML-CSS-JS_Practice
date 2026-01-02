import express from "express";
import { getAllProjects } from "../controllers/projectsController.js";

export const projectsRouter = express.Router();

projectsRouter.get("/", getAllProjects);
