import Question from "./Question";
import { categoryData } from "../../utils/data/filterData";

interface CategoryType {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category = (data: CategoryType) => {
  return (
    <>
      <Question title="어떤 행사를 계획 중이신가요?" />
      <div className=" flex mt-6 gap-2.5">
        {categoryData.slice(1).map(item => (
          <div className="font-regular whitespace-nowrap border grow items-center px-5 py-2 rounded-3xl border-solid border-neutral-200 text-center">
            {item.text}
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
