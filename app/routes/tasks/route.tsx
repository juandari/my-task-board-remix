import { type MetaFunction } from "@remix-run/node";

import HomePageView from "./tasks.view";
import { Outlet } from "@remix-run/react";
import { css } from "styled-system/css";
import { useEffect, useState } from "react";
import { LocalStorageImpl } from "data/data-source";
import { TaskRepositoryImpl } from "data/repository";
import { TaskRepository } from "domain/repository/task-repository";

export const meta: MetaFunction = () => {
  return [
    { title: "My Task Board App" },
    { name: "description", content: "Tasks to keep organized!" },
  ];
};

export type TaskOutletContext = {
  taskRepository?: TaskRepository;
};

export default function Index() {
  const [taskRepository, setTaskRepository] = useState<TaskRepository>();

  useEffect(() => {
    const dataSource = new LocalStorageImpl(window);
    const repository = new TaskRepositoryImpl(dataSource);
    setTaskRepository(repository);
  }, []);

  return (
    <main className={css({ position: "relative" })}>
      <HomePageView taskRepository={taskRepository} />
      <div className={css({ position: "absolute", top: 0, left: 0 })}>
        <Outlet context={{ taskRepository } satisfies TaskOutletContext} />
      </div>
    </main>
  );
}
