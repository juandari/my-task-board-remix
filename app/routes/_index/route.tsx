import { useEffect, useState } from 'react';
import { type MetaFunction } from '@remix-run/node';

import { LocalStorageImpl } from 'data/data-source';
import { TaskRepositoryImpl } from 'data/repository';
import { TaskRepository } from 'domain/repository/task-repository';
import HomePageView from './_index.view';

export const meta: MetaFunction = () => {
  return [
    { title: 'My Task Board App' },
    { name: 'description', content: 'Tasks to keep organized!' },
  ];
};

export default function Index() {
  const [taskRepository, setTaskRepository] = useState<TaskRepository>();

  useEffect(() => {
    const dataSource = new LocalStorageImpl(window);
    const repository = new TaskRepositoryImpl(dataSource);
    setTaskRepository(repository);
  }, []);

  return <HomePageView taskRepository={taskRepository} />;
}
