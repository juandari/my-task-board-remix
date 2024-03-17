import { Task } from "domain/model";

export interface TaskRepository {
  addTask(task: Omit<Task, "id">): Task;
  removeTask(id: number): void;
  updateTask(task: Task): Task;
  getAllTasks(): Task[];
  getTaskById(id: number): Task | null;
}
