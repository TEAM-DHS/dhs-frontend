import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoilPersistSession",
  storage: sessionStorage,
});

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
    keyword: "",
    sort: "NEW",
    category: "",
    page: 0,
  },
});
