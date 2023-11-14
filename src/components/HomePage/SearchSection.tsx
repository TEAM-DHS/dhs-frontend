import { useState, useEffect } from "react";
import CategoryBlock from "../_common/CategoryBlock";
import { categoryData } from "../../utils/data/categoryData";

const SearchSection = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("전체");
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[calc(100%-100px)] flex justify-between items-center py-[50px] mobile:w-[calc(100%-40px)]">
        <div className="flex flex-wrap gap-[10px]">
          {categoryData.map(item => (
            <CategoryBlock
              text={item.text}
              clicked={currentCategory === item.text}
              onClick={setCurrentCategory}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
