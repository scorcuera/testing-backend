import { db_connection } from "../../database/db_connection";

const Task = {
    getAllTasks: async () => {
        try {
            const connection = await db_connection;
            const [result, metadata] = await connection.query('SELECT * FROM tasks');
            return result;
        } catch (error) {
            throw new Error('Internal server error')
        }
    },
    createTask: async (taskData: any) => {
        try {
            const connection = await db_connection;
            await connection.query('INSERT INTO tasks (name, description) VALUES (?)', [[taskData.name, taskData.description]]);
        } catch (error) {
            throw new Error('Internal server error')
        }
    },
    deleteAllTasks: async () => {
        try {
            const connection = await db_connection;
            await connection.query('DELETE FROM tasks');
        } catch (error) {
            throw new Error('Internal server error')
        }
    }
};

export default Task;