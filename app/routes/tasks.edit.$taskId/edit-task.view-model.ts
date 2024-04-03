import { useRef, useState } from "react";

import { Task } from "domain/model";
import { TaskRepository } from "domain/repository/task-repository";
import { useStore } from "~/store";

export function useEditTaskViewModel(
  taskId?: string,
  taskRepository?: TaskRepository
) {
  const statuses = useStore((state) => state.statuses);
  const icons = useStore((state) => state.icons);
  const task = taskRepository?.getTaskById(Number(taskId));

  const addTaskModalRef = useRef<HTMLFormElement>(null);
  const [selectedIconId, setSelectedIconId] = useState(icons[0]?.id);
  const [selectedStatusId, setSelectedStatusId] = useState(statuses[0]?.id);
  const [taskName, setTaskName] = useState(task?.title || "");
  const [taskDescription, setTaskDescription] = useState(
    task?.description || ""
  );

  function handleEditTask(task: Omit<Task, "id">) {
    if (taskRepository)
      taskRepository?.updateTask({ ...task, id: Number(taskId) });
  }

  function handleDeleteTask(taskId: number) {
    if (taskRepository) taskRepository.removeTask(taskId);
  }

  return {
    statuses,
    taskName,
    taskDescription,
    icons,
    addTaskModalRef,
    selectedIconId,
    selectedStatusId,
    setSelectedIconId,
    setSelectedStatusId,
    setTaskName,
    setTaskDescription,
    handleEditTask,
    handleDeleteTask,
  };
}
