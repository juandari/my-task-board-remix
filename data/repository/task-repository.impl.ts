import { DataSource } from 'data/data-source/data-source';
import { Task } from 'domain/model';
import { TaskRepository } from 'domain/repository/task-repository';

export class TaskRepositoryImpl implements TaskRepository {
  dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  getAllTasks() {
    // TODO: Implement logic to retrieve all tasks from local storage
  }

  getTaskById(id: string) {
    // TODO: Implement logic to retrieve a task by its ID from local storage
  }

  addTask(task: Omit<Task, 'id'>) {
    // TODO: Implement logic to add a task to local storage
  }

  updateTask(task: Task) {
    // TODO: Implement logic to update a task in local storage
  }

  removeTask(id: string) {
    // TODO: Implement logic to delete a task from local storage
  }
}
