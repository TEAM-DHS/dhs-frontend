import { atom } from "recoil";

export const categoryNavBarState = atom<string>({
  key: "categoryNavBarState",
  default: "",
});

export const categoryFilterState = atom<string[]>({
  key: "categoryFilterState",
  default: [],
});

export const filterState = atom<EventFilterType>({
  key: "filterState",
  default: {
    search: "",
    sort: "new",
    category: "",
    page: 0,
  },
});
