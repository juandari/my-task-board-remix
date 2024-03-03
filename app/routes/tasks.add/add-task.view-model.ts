import { useRef, useState } from "react";

import { Task } from "domain/model";
import { TaskRepository } from "domain/repository/task-repository";
import { closeRing1Icon, timeAttackIcon } from "assets";

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

const icons = [
  {
    id: 1,
    icon: closeRing1Icon,
  },
  {
    id: 2,
    icon: closeRing1Icon,
  },
  {
    id: 3,
    icon: closeRing1Icon,
  },
];

export function useAddTaskViewModel(taskRepository?: TaskRepository) {
  const addTaskModalRef = useRef<HTMLFormElement>(null);
  const [selectedIconId, setSelectedIconId] = useState(icons[0].id);
  const [selectedStatusId, setSelectedStatusId] = useState(statuses[0].id);

  const handleAddTask = (task: Task) => {
    taskRepository?.addTask(task);
  };

  return {
    addTaskModalRef,
    statuses,
    icons,
    selectedIconId,
    selectedStatusId,
    setSelectedIconId,
    setSelectedStatusId,
    handleAddTask,
  };
}
