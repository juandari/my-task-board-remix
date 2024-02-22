import { Task } from 'domain/model';
import { DataSource } from '../data-source';

export class LocalStorageImpl implements DataSource {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id) ?? null;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTask(task: Task) {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
    return task;
  }

  addTask(task: Omit<Task, 'id'>) {
    const newTask = { ...task, id: this.tasks.length + 1 };
    this.tasks.push(newTask);
    return newTask;
  }

  // We use dummy data for username
  getUsername() {
    return 'username';
  }

  createUsername() {
    return 'username';
  }
}
