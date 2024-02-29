import { Request, Response } from "express";
import Task from "../models/sql/task.model";

const taskController = {
    getAllTasks: async (req: Request, res: Response) => {
        try {
            const tasks = await Task.getAllTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json('Internal server error');
        }
    },
    createTask: async (req: Request, res: Response) => {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                return res.status(400).json('Something went wrong with client request');
            }
            await Task.createTask(req.body);
            res.status(201).json('Task created succesfully');
            //manejo de errores
        } catch (error) {
            res.status(500).json('Internal server error');
        }
    }
}

export default taskController;
