import Question from "./Question";
import { categoryData } from "../../utils/data/filterData";

const Category = ({ category, setCategory }: EventCategoryType) => {
  const handleButtonClick = (value: string) => {
    setCategory(value);
  };

  return (
    <>
      <Question title="어떤 행사를 계획 중이신가요?" />
      <div className=" flex mt-6 gap-2.5">
        {categoryData.slice(1).map((item, i) => (
          <button
            className={`font-regular whitespace-nowrap border grow items-center px-5 py-2 rounded-3xl border-solid  text-center ${
              category === item.text
                ? "bg-whiteBlue text-mainBlue border-mainBlue"
                : "bg-white"
            }`}
            key={i}
            onClick={() => handleButtonClick(item.text)}
          >
            {item.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default Category;
