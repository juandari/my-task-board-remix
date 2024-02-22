import { Task } from 'domain/model';

export interface DataSource {
  getAllTasks(): Task[];
  getTaskById(id: number): Task | null;
  deleteTask(id: number): void;
  updateTask(task: Task): Task;
  addTask(task: Omit<Task, 'id'>): Task;

  getUsername(): string;
  createUsername(): string;
}
