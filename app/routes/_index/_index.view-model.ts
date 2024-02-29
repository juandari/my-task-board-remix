import { TaskRepository } from 'domain/repository/task-repository';
import { trashIcon, timeAttackIcon } from 'assets';
import { useState } from 'react';
import { Task } from 'domain/model';

const TASKS = [
  {
    id: 1,
    title: 'My first task',
    description: 'First task',
    iconURL: trashIcon,
    status: 'In Progress' as const,
  },
  {
    id: 2,
    title: 'My second task',
    description: 'Second task',
    iconURL: timeAttackIcon,
    status: 'In Progress' as const,
  },
  {
    id: 3,
    title: 'My third task',
    description: 'Third task',
    iconURL: trashIcon,
    status: 'In Progress' as const,
  },
];

export function useHomeViewModel(taskRepository?: TaskRepository) {
  const [tasks] = useState<Task[]>(TASKS);

  function handleAddTask() {
    if (!taskRepository) return;
    const newTask = taskRepository.addTask({
      title: 'My new task',
      description: 'New task',
      iconURL: '',
      status: 'In Progress',
    });
    console.log('New task:', newTask);
  }

  return {
    tasks,
    handleAddTask,
  };
}
