type categoryItemType = {
  id: number;
  text: string;
  path: string;
  category: string;
};

export const myPageCategory: categoryItemType[] = [
  {
    id: 0,
    text: "찜 목록",
    path: "/mypage?category=heart&page=0",
    category: "heart",
  },
  {
    id: 1,
    text: "등록 내역",
    path: "/mypage?category=created&page=0",
    category: "created",
  },
  {
    id: 2,
    text: "신청 내역",
    path: "/mypage?category=registered&page=0",
    category: "registered",
  },
];
