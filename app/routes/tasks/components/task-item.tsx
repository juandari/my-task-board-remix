import { timeAttackIcon } from 'assets';
import { Task } from 'domain/model';
import { css } from 'styled-system/css';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <article
      className={css({
        bg: 'yellow.300',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4',
        borderRadius: 'lg',
        gap: '1',
      })}
    >
      <div className={css({ display: 'flex', gap: '4', alignItems: 'center' })}>
        <img
          alt=""
          src={task.iconURL}
          className={css({
            borderRadius: 'lg',
            bg: 'gray.500',
            w: '8',
            h: '8',
            p: '1',
          })}
        />
        <p className={css({ fontWeight: 'semibold' })}>{task.title}</p>
      </div>
      <img
        alt=""
        src={timeAttackIcon}
        className={css({
          borderRadius: 'lg',
          bg: 'yellow.500',
          w: '8',
          h: '8',
          p: '1',
        })}
      />
    </article>
  );
}
