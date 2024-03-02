import { useRef } from "react";

import { Task } from "domain/model";
import { TaskRepository } from "domain/repository/task-repository";
import { timeAttackIcon } from "assets";

const statuses = [
  {
    id: 1,
    name: "In Progress",
    icon: timeAttackIcon,
    color: "#fdba74",
  },
  {
    id: 2,
    name: "Completed",
    icon: timeAttackIcon,
    color: "#22c55e",
  },
  {
    id: 3,
    name: "Won't Do",
    icon: timeAttackIcon,
    color: "#f87171",
  },
];

export function useAddTaskViewModel(taskRepository?: TaskRepository) {
  const addTaskModalRef = useRef<HTMLFormElement>(null);

  const handleAddTask = (task: Task) => {
    taskRepository?.addTask(task);
  };

  return {
    addTaskModalRef,
    statuses,
    handleAddTask,
  };
}
