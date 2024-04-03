export const statuses = ["In Progress", "Done", "To Do"] as const;

export type StatusName = "In Progress" | "Done" | "To Do";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: StatusName;
  icon: string;
};

export type Icon = {
  id: number;
  value: string;
};

export type Status = {
  id: number;
  name: string;
  icon: string;
  color: string;
};
