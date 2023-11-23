export type categoryItemType = {
  id: number;
  text: string;
  path: string;
  params: CategoryType;
};
export const categoryData: categoryItemType[] = [
  {
    id: 0,
    text: "전체",
    path: "/",
    params: "",
  },
  {
    id: 1,
    text: "공연",
    path: "/list?category=PLAY",
    params: "PLAY",
  },
  {
    id: 2,
    text: "전시",
    path: "/list?category=EXHIBIT",
    params: "EXHIBIT",
  },
  {
    id: 3,
    text: "주점",
    path: "/list?category=BAR",
    params: "BAR",
  },
  {
    id: 4,
    text: "학술",
    path: "/list?category=ACADEMIC",
    params: "ACADEMIC",
  },
  {
    id: 5,
    text: "기타",
    path: "/list?category=ETC",
    params: "ETC",
  },
];

type sortItemType = {
  id: number;
  text: "최신순" | "인기순" | "마감 임박순";
  params: SortType;
};
export const sortData: sortItemType[] = [
  {
    id: 0,
    text: "최신순",
    params: "NEW",
  },
  {
    id: 1,
    text: "인기순",
    params: "POPULAR",
  },
  {
    id: 2,
    text: "마감 임박순",
    params: "DEADLINE",
  },
];
