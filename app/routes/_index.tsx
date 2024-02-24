import { type MetaFunction } from '@remix-run/node';
import { LocalStorageImpl } from 'data/data-source';
import { TaskRepositoryImpl } from 'data/repository';
import { useEffect, useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: 'My Task Board App' },
    { name: 'description', content: 'Tasks to keep organized!' },
  ];
};

export default function Index() {
  const [taskRepository, setTaskRepository] = useState<TaskRepositoryImpl>();

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

  useEffect(() => {
    const dataSource = new LocalStorageImpl(window);
    const repository = new TaskRepositoryImpl(dataSource);
    setTaskRepository(repository);
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      arjun
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
}
