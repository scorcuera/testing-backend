import { createConnection, ConnectionOptions } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const DB_CONFIG: ConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT as string),
    password: process.env.DB_PASSWORD,
    database: process.env.NODE_ENV === 'test' ? process.env.DB_NAME_TEST : process.env.DB_NAME
}

export const db_connection = createConnection(DB_CONFIG);