import { TaskRepository } from 'domain/repository/task-repository';
import { useHomeViewModel } from './_index.view-model';
import { logoIcon, trashIcon, timeAttackIcon } from 'assets';
import { css } from 'styled-system/css';

type HomePageProps = {
  taskRepository?: TaskRepository;
};

export default function HomePageView({ taskRepository }: HomePageProps) {
  const { handleAddTask } = useHomeViewModel(taskRepository);
  console.log(handleAddTask);

  return (
    <main
      className={css({
        padding: '5',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
      })}
    >
      <header
        className={css({
          display: 'grid',
          gridTemplateColumns: '60px 1fr',
          columnGap: '4',
        })}
      >
        <img src={logoIcon} alt="" width={60} height={60} />
        <h1
          className={css({
            fontSize: '4xl',
            fontWeight: 'medium',
          })}
        >
          My Task Board
        </h1>
        <p className={css({ gridColumn: '2 / span 1' })}>
          Tasks to keep organized
        </p>
      </header>

      <section className={css({ w: 'full', mt: '8' })}>
        <article
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bg: 'yellow.300',
            padding: '2',
            borderRadius: 'lg',
            gap: '1',
          })}
        >
          <div
            className={css({ display: 'flex', gap: '4', alignItems: 'center' })}
          >
            <img
              alt=""
              src={trashIcon}
              className={css({
                borderRadius: 'lg',
                bg: 'gray.500',
                w: '8',
                h: '8',
                p: '1',
              })}
            />
            <p className={css({ fontWeight: 'semibold' })}>Task in Progress</p>
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
      </section>
    </main>
  );
}
