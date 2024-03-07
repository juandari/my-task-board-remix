import { useRef, useState } from "react";

import { Task } from "domain/model";
import { TaskRepository } from "domain/repository/task-repository";
import { useStore } from "~/store";

export function useAddTaskViewModel(taskRepository?: TaskRepository) {
  const statuses = useStore((state) => state.statuses);
  const icons = useStore((state) => state.icons);

  const addTaskModalRef = useRef<HTMLFormElement>(null);
  const [selectedIconId, setSelectedIconId] = useState(icons[0]?.id);
  const [selectedStatusId, setSelectedStatusId] = useState(statuses[0]?.id);

  const handleAddTask = (task: Task) => {
    taskRepository?.addTask(task);
  };

  return {
    statuses,
    icons,
    addTaskModalRef,
    selectedIconId,
    selectedStatusId,
    setSelectedIconId,
    setSelectedStatusId,
    handleAddTask,
  };
}
