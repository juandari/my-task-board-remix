import { useEffect } from "react";
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
import { localStorageKey } from "./local-storage/constant";
import { seedLocalStorage } from "./local-storage/seed.client";
import { useStore } from "./store";

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
  const updateStatuses = useStore((state) => state.updateStatuses);
  const updateIcons = useStore((state) => state.updateIcons);

  // seed data to local storage
  useEffect(() => {
    seedLocalStorage(window);
    const statuses = window.localStorage.getItem(localStorageKey.STATUS);
    const icons = window.localStorage.getItem(localStorageKey.ICON);

    if (statuses) {
      updateStatuses(JSON.parse(statuses));
    }

    if (icons) {
      updateIcons(JSON.parse(icons));
    }
  }, [updateIcons, updateStatuses]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
