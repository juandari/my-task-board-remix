import { PrismaClient } from '@prisma/client';

import { Task } from 'domain/model';
import { DataSource } from '../data-source';

export class PrismaClientImpl implements DataSource {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getAllTasks() {
    return this.prisma.task.findMany();
  }

  getTaskById(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  deleteTask(id: number) {
    this.prisma.task.delete({ where: { id } });
  }

  updateTask(task: Task) {
    return this.prisma.task.update({ where: { id: task.id }, data: task });
  }

  addTask(task: Omit<Task, 'id'>) {
    return this.prisma.task.create({ data: task });
  }

  getUsername() {
    return 'JohnDoe';
  }

  createUsername() {
    return 'NewUser';
  }
}
