import { useNavigate, useOutletContext } from '@remix-run/react';

import useClickOutside from '~/hook/use-click-outside';
import { useAddTaskViewModel } from './add-task.view-model';
import { TaskOutletContext } from '../tasks/route';
import { StatusName } from 'domain/model';
import TaskDetailModal from '~/components/task-detail-modal';

export default function AddTaskView() {
  const navigate = useNavigate();

  const { taskRepository } = useOutletContext<TaskOutletContext>();

  const {
    addTaskModalRef,
    statuses,
    icons,
    selectedIconId,
    selectedStatusId,
    taskName,
    taskDescription,
    setTaskName,
    setTaskDescription,
    setSelectedIconId,
    setSelectedStatusId,
    handleAddTask,
  } = useAddTaskViewModel(taskRepository);

  function handleClose() {
    navigate(-1);
  }

  function handleDelete() {
    navigate(-1);
  }

  function handleSubmitClientSide() {
    handleAddTask({
      description: taskDescription,
      icon: icons.find((icon) => icon?.id === selectedIconId)?.value || '',
      status: (statuses.find((status) => status?.id === selectedStatusId)
        ?.name || 'In Progress') as StatusName,
      title: taskName,
    });
    navigate('..');
  }

  useClickOutside(addTaskModalRef, handleClose);

  return (
    <TaskDetailModal
      ref={addTaskModalRef}
      taskName={taskName}
      selectedStatusId={selectedStatusId}
      selectedIconId={selectedIconId}
      taskDescription={taskDescription}
      setTaskName={setTaskName}
      setTaskDescription={setTaskDescription}
      setSelectedIconId={setSelectedIconId}
      setSelectedStatusId={setSelectedStatusId}
      onClose={handleClose}
      onDelete={handleDelete}
      onSubmit={handleSubmitClientSide}
    />
  );
}
