import { Icon, Status } from "domain/model";
import { create } from "zustand";

type State = {
  statuses: Array<Status | undefined>;
  icons: Array<Icon | undefined>;
};

type Action = {
  updateStatuses: (statuses: Status[]) => void;
  updateIcons: (icons: Icon[]) => void;
};

export const useStore = create<State & Action>((set) => ({
  statuses: [],
  icons: [],
  updateStatuses: (statuses: Status[]) => set(() => ({ statuses })),
  updateIcons: (icons: Icon[]) => set(() => ({ icons })),
}));
