import { TaskRepository } from "domain/repository/task-repository";

export function useHomeViewModel(taskRepository?: TaskRepository) {
  const tasks = taskRepository?.getAllTasks() || [];

  return {
    tasks,
  };
}
