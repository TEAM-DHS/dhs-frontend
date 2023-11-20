const useCategoryText = (type: string) =>
  type === "show"
    ? "공연"
    : type === "exhibition"
    ? "전시"
    : type === "academic"
    ? "학술"
    : type === "pub"
    ? "주점"
    : type === "etc"
    ? "기타"
    : type === ""
    ? "전체"
    : "-";
export default useCategoryText;
