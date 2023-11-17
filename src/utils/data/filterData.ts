export type categoryItemType = {
  id: number;
  text: string;
  path: string;
  params: "" | "show" | "exhibition" | "pub" | "academic" | "etc";
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
    path: "/list?category=show",
    params: "show",
  },
  {
    id: 2,
    text: "전시",
    path: "/list?category=exhibition",
    params: "exhibition",
  },
  {
    id: 3,
    text: "주점",
    path: "/list?category=pub",
    params: "pub",
  },
  {
    id: 4,
    text: "학술",
    path: "/list?category=academic",
    params: "academic",
  },
  {
    id: 5,
    text: "기타",
    path: "/list?category=etc",
    params: "etc",
  },
];

type sortItemType = {
  id: number;
  text: "최신순" | "인기순" | "마감 임박순";
  params: "new" | "liked" | "imm";
};
export const sortData: sortItemType[] = [
  {
    id: 0,
    text: "최신순",
    params: "new",
  },
  {
    id: 1,
    text: "인기순",
    params: "liked",
  },
  {
    id: 2,
    text: "마감 임박순",
    params: "imm",
  },
];
