import { Router } from "express";
import taskController from "../controllers/task.controller";

const taskRoutes = Router();

taskRoutes.route("/").get(taskController.getAllTasks);
taskRoutes.route("/").post(taskController.createTask);

export default taskRoutes;