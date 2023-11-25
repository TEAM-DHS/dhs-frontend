type categoryItemType = {
  id: number;
  text: string;
  path: string;
};

export const myPageCategory: categoryItemType[] = [
  {
    id: 0,
    text: "찜 목록",
    path: "/mypage?category=heart&page=1",
  },
  {
    id: 1,
    text: "등록 내역",
    path: "/mypage?category=created&page=1",
  },
  {
    id: 2,
    text: "신청 내역",
    path: "/mypage?category=registered&page=1",
  },
];
