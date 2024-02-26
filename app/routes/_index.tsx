import { useEffect, useState } from 'react';
import { type MetaFunction } from '@remix-run/node';

import { LocalStorageImpl } from 'data/data-source';
import { TaskRepositoryImpl } from 'data/repository';
import * as Ic from 'assets';

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
    <div className="text-3xl font-bold">
      arjun
      <button onClick={handleAddTask}>Add task</button>
      <img src={Ic.addRoundIcon} alt="" />
      <img src={Ic.closeRing1Icon} alt="" />
      <img src={Ic.closeRingIcon} alt="" />
      <img src={Ic.doneRound2Icon} alt="" />
      <img src={Ic.doneRoundIcon} alt="" />
      <img src={Ic.editIcon} alt="" />
      <img src={Ic.logoIcon} alt="" />
      <img src={Ic.timeAttackIcon} alt="" />
      <img src={Ic.trashIcon} alt="" />
    </div>
  );
}
