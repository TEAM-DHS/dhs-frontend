import { useEffect } from "react";
import CategoryBlock from "../_common/CategoryBlock";

import { categoryData, categoryItemType } from "../../utils/data/filterData";
import { useRecoilState, useResetRecoilState } from "recoil";
import { categoryFilterState, filterState } from "../../services/store/event";

const CategoryBar = () => {
  // 카테고리 상태
  const [categoryFilter, setCategoryFilter] =
    useRecoilState<string[]>(categoryFilterState);
  const resetCategory = useResetRecoilState(categoryFilterState);
  const toggleCategory = (item: categoryItemType) => {
    categoryFilter.includes(item.params)
      ? setCategoryFilter(prev => prev.filter(el => el !== item.params))
      : setCategoryFilter(prev => [...prev, item.params]);
  };

  // 전체 필터 상태
  const [filter, setFilter] = useRecoilState<EventFilterType>(filterState);
  useEffect(() => {
    if (categoryFilter.length === 0)
      setFilter(prev => ({ ...prev, category: "" }));
    else setFilter(prev => ({ ...prev, category: categoryFilter.join(",") }));
  }, [categoryFilter]);
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="w-auto flex flex-wrap gap-[10px]">
      {categoryData.map(item => (
        <CategoryBlock
          text={item.params}
          clicked={
            item.id === 0
              ? categoryFilter.length === 0
              : categoryFilter.includes(item.params)
          }
          onClick={() =>
            item.id === 0 ? resetCategory() : toggleCategory(item)
          }
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
