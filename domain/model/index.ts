export const statuses = ['In Progress', 'Done', 'To Do'] as const;

export type Task = {
  id: number;
  title: string;
  description: string;
  status: (typeof statuses)[number];
  iconURL: string;
};
