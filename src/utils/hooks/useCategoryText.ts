const useCategoryText = (type: string) =>
  type === "PLAY"
    ? "공연"
    : type === "EXHIBIT"
    ? "전시"
    : type === "ACADEMIC"
    ? "학술"
    : type === "BAR"
    ? "주점"
    : type === "ETC"
    ? "기타"
    : type === ""
    ? "전체"
    : "-";
export default useCategoryText;
