import { Status, Task } from "domain/model";
import { css } from "styled-system/css";
import { seedStatusData } from "~/local-storage/seed.client";

interface TaskItemProps {
  task: Task;
  statuses?: (Status | undefined)[];
  onClick: (id: number) => void;
}

export default function TaskItem({
  task,
  statuses = [],
  onClick,
}: TaskItemProps) {
  const statusIcon = statuses.find(
    (status) => status?.name === task.status
  )?.icon;

  return (
    <button
      className={css({
        bg: "yellow.300",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "4",
        borderRadius: "lg",
        gap: "1",
      })}
      onClick={() => onClick(task.id)}
    >
      <div
        className={css({
          display: "flex",
          gap: "4",
          alignItems: task.description ? "flex-start" : "center",
        })}
      >
        <span
          className={css({
            borderRadius: "lg",
            bg: "gray.50",
            w: "8",
            h: "8",
            p: "1",
            textAlign: "center",
          })}
        >
          {task.icon}
        </span>
        <div
          className={css({
            textAlign: "left",
          })}
        >
          <p className={css({ fontWeight: "semibold" })}>{task.title}</p>
          <p>{task.description}</p>
        </div>
      </div>
      <img
        alt=""
        src={statusIcon}
        className={css({
          borderRadius: "lg",
          bg: seedStatusData.find((status) => status.name === task.status)
            ?.color,
          w: "8",
          h: "8",
          p: "1",
        })}
      />
    </button>
  );
}
