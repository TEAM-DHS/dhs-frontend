import { atom } from "recoil";

export const categoryFilterState = atom<string[]>({
  key: "categoryFilterState",
  default: [],
});
