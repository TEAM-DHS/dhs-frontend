import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const categoryNavBarState = atom<CategoryType>({
  key: "categoryNavBarState",
  default: "",
  effects_UNSTABLE: [persistAtom],
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
