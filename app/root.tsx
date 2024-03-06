import { useEffect, useState } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./index.css";
import { LocalStorageImpl } from "data/data-source";
import { TaskRepositoryImpl } from "data/repository";
import { TaskRepository } from "domain/repository/task-repository";
import { localStorageKey } from "./local-storage/constant";
import { Icon, Status } from "domain/model";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
  },
  { rel: "stylesheet", href: styles },
];

export default function App() {
  const [taskRepository, setTaskRepository] = useState<TaskRepository>();
  // TODO: move this to zustand store
  const [icons, setIcons] = useState<Icon[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);

  // seed data to local storage
  useEffect(() => {
    const statuses = window.localStorage.getItem(localStorageKey.STATUS);
    const icons = window.localStorage.getItem(localStorageKey.ICON);

    if (statuses) {
      setStatuses(JSON.parse(statuses));
    }

    if (icons) {
      setIcons(JSON.parse(icons));
    }
  }, []);

  useEffect(() => {
    const dataSource = new LocalStorageImpl(window);
    const repository = new TaskRepositoryImpl(dataSource);
    setTaskRepository(repository);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet context={taskRepository} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
