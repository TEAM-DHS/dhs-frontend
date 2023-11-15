import { useState, useEffect } from "react";
import CategoryBlock from "../_common/CategoryBlock";

import { categoryData } from "../../utils/data/categoryData";
import { useRecoilState, useResetRecoilState } from "recoil";
import { categoryFilterState } from "../../services/store/event";

const SearchSection = () => {
  const [categoryFilter, setCategoryFilter] =
    useRecoilState<string[]>(categoryFilterState);
  const resetCategory = useResetRecoilState(categoryFilterState);
  const toggleCategory = (text: string) => {
    categoryFilter.includes(text)
      ? setCategoryFilter(prev => prev.filter(el => el !== text))
      : setCategoryFilter(prev => [...prev, text]);
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[calc(100%-100px)] flex justify-between items-center py-[50px] mobile:w-[calc(100%-40px)]">
        <div className="flex flex-wrap gap-[10px]">
          {categoryData.map(item => (
            <CategoryBlock
              text={item.text}
              clicked={
                item.id === 0
                  ? categoryFilter.length === 0
                  : categoryFilter.includes(item.text)
              }
              onClick={() =>
                item.id === 0 ? resetCategory() : toggleCategory(item.text)
              }
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
