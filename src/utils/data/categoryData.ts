type categoryItemType = {
  id: number;
  text: string;
  path: string;
};

export const categoryData: categoryItemType[] = [
  {
    id: 0,
    text: "홈",
    path: "/",
  },
  {
    id: 1,
    text: "공연",
    path: "/list?category=show",
  },
  {
    id: 2,
    text: "전시",
    path: "/list?category=exhibition",
  },
  {
    id: 3,
    text: "주점",
    path: "/list?category=pub",
  },
  {
    id: 4,
    text: "학술",
    path: "/list?category=academic",
  },
  {
    id: 5,
    text: "기타",
    path: "/list?category=etc",
  },
];
