import { Router } from "express";
import {
  deleteTask,
  getAllTasks,
  postTasks,
  putTasks,
} from "../controllers/taskController.js";

const router = Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", postTasks);
router.put("/tasks/:_id", putTasks);
router.delete("/tasks/:_id", deleteTask);

export default router;
