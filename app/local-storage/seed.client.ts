import { statuses } from "domain/model";

const seedIconData = ["☕", "💬", "💪🏻", "⛹🏻‍♂️", "📚", "⏰"];
const seedStatusData = statuses;

export function seedLocalStorage(window: Window) {
  const seedIconWithId = seedIconData.map((icon, index) => ({
    id: index + 1,
    value: icon,
  }));
  const seedIStatusWithId = seedStatusData.map((status, index) => ({
    id: index + 1,
    value: status,
  }));

  window.localStorage.setItem("icons", JSON.stringify(seedIconWithId));
  window.localStorage.setItem("statuses", JSON.stringify(seedIStatusWithId));
}
