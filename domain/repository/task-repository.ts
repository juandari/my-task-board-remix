import { Task } from "domain/model";

export interface TaskRepository {
  addTask(task: Omit<Task, "id">): Promise<Task>;
  removeTask(id: string): Promise<void>;
  updateTask(task: Task): Promise<Task>;
  getTasks(): Promise<Task[]>;
  getTask(id: string): Promise<Task>;
}
