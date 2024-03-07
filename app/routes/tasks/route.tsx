import { type MetaFunction } from "@remix-run/node";

import HomePageView from "./tasks.view";
import { Outlet } from "@remix-run/react";
import { css } from "styled-system/css";
import { useStore } from "~/store";

export const meta: MetaFunction = () => {
  return [
    { title: "My Task Board App" },
    { name: "description", content: "Tasks to keep organized!" },
  ];
};

export default function Index() {
  const statuses = useStore((state) => state.statuses);
  const icons = useStore((state) => state.icons);

  console.log(statuses, "arjun statuses");
  console.log(icons, "arjun icons");

  return (
    <main className={css({ position: "relative" })}>
      <HomePageView />
      <div className={css({ position: "absolute", top: 0, left: 0 })}>
        <Outlet />
      </div>
    </main>
  );
}
