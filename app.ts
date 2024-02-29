import express from 'express';
import taskRoutes from './routes/task.routes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app, server };