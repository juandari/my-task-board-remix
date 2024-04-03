import { Task } from "domain/model";
import { DataSource } from "../data-source";

export class LocalStorageImpl implements DataSource {
  tasks: Task[];
  window: Window;

  constructor(window: Window) {
    this.tasks = JSON.parse(
      window.localStorage.getItem("tasks") || "[]"
    ) as Task[];
    this.window = window;
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id) ?? null;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.window.localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  updateTask(task: Task) {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
    this.window.localStorage.setItem("tasks", JSON.stringify(this.tasks));
    return task;
  }

  addTask(task: Omit<Task, "id">) {
    const newTask = { ...task, id: this.tasks.length + 1 };
    this.tasks.push(newTask);
    this.window.localStorage.setItem("tasks", JSON.stringify(this.tasks));
    return newTask;
  }

  // We use dummy data for username
  getUsername() {
    return "username";
  }

  createUsername() {
    return "username";
  }
}
