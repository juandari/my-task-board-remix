import { useNavigate } from "@remix-run/react";

import { css } from "styled-system/css";
import { logoIcon, addRoundIcon } from "assets";
import { useHomeViewModel } from "./tasks.view-model";
import TaskItem from "./components/task-item";
import { TaskRepository } from "domain/repository/task-repository";

type HomePageViewProps = {
  taskRepository?: TaskRepository;
};
export default function HomePageView({ taskRepository }: HomePageViewProps) {
  const navigate = useNavigate();

  const { tasks } = useHomeViewModel(taskRepository);

  function handleClickAdd() {
    navigate("./add");
  }

  return (
    <div
      className={css({
        padding: "5",
        display: "flex",
        flexDir: "column",
        maxW: "640px",
        margin: "0 auto",
      })}
    >
      <header
        className={css({
          display: "grid",
          gridTemplateColumns: "60px 1fr",
          columnGap: "4",
        })}
      >
        <img src={logoIcon} alt="" width={60} height={60} />
        <h1
          className={css({
            fontSize: "4xl",
            fontWeight: "medium",
          })}
        >
          My Task Board
        </h1>
        <p className={css({ gridColumn: "2 / span 1" })}>
          Tasks to keep organized
        </p>
      </header>

      <section
        className={css({
          w: "full",
          mt: "8",
          display: "flex",
          flexDir: "column",
          gap: "5",
        })}
      >
        {tasks?.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}

        <button
          onClick={handleClickAdd}
          className={css({
            bg: "lime.200",
            _hover: { bg: "lime.400" },
            _active: { bg: "lime.500" },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "4",
            borderRadius: "lg",
            gap: "4",
          })}
        >
          <img
            alt=""
            src={addRoundIcon}
            className={css({
              bg: "green.500",
              padding: "2",
              borderRadius: "lg",
            })}
          />
          <p className={css({ fontWeight: "medium" })}>Add new task</p>
        </button>
      </section>
    </div>
  );
}
