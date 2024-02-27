import { TaskRepository } from 'domain/repository/task-repository';

export function useHomeViewModel(taskRepository?: TaskRepository) {
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

  return { handleAddTask };
}
