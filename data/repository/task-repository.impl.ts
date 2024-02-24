import { DataSource } from 'data/data-source/data-source';
import { Task } from 'domain/model';
import { TaskRepository } from 'domain/repository/task-repository';

export class TaskRepositoryImpl implements TaskRepository {
  dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  getAllTasks() {
    return this.dataSource.getAllTasks();
  }

  getTaskById(id: number) {
    return this.dataSource.getTaskById(id);
  }

  addTask(task: Omit<Task, 'id'>) {
    return this.dataSource.addTask(task);
  }

  updateTask(task: Task) {
    return this.dataSource.updateTask(task);
  }

  removeTask(id: number) {
    return this.dataSource.deleteTask(id);
  }
}
