import { useRef } from "react";

import { Task } from "domain/model";
import { TaskRepository } from "domain/repository/task-repository";

export function useAddTaskViewModel(taskRepository?: TaskRepository) {
  const addTaskModalRef = useRef<HTMLFormElement>(null);

  const handleAddTask = (task: Task) => {
    taskRepository?.addTask(task);
  };

  return {
    addTaskModalRef,
    handleAddTask,
  };
}
