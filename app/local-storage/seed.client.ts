import { timeAttackIcon, doneRound2Icon, closeRingIcon } from "assets";

const seedIconData = ["☕", "💬", "💪🏻", "⛹🏻‍♂️", "📚", "⏰"];

export const seedStatusData = [
  {
    id: 1,
    name: "In Progress",
    icon: timeAttackIcon,
    color: "orange.400",
  },
  {
    id: 2,
    name: "Completed",
    icon: doneRound2Icon,
    color: "green.400",
  },
  {
    id: 3,
    name: "Won't Do",
    icon: closeRingIcon,
    color: "red.400",
  },
];

export function seedLocalStorage(window: Window) {
  const seedIconWithId = seedIconData.map((icon, index) => ({
    id: index + 1,
    value: icon,
  }));

  window.localStorage.setItem("icons", JSON.stringify(seedIconWithId));
  window.localStorage.setItem("statuses", JSON.stringify(seedStatusData));
}
