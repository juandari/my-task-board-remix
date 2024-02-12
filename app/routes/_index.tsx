import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "data-source/prisma";

export const meta: MetaFunction = () => {
  return [
    { title: "My Task Board App" },
    { name: "description", content: "Tasks to keep organized!" },
  ];
};

export async function loader() {
  const icons = await prisma.icon.findMany();

  return json({ icons });
}

export default function Index() {
  const { icons } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {icons.map((icon) => (
        <p key={icon.id}>{icon.value}</p>
      ))}
    </div>
  );
}
