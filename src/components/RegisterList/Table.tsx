import EmptyMessage from "../MyPage/EmptyMessage";
import List from "./List";
import { registerCategory } from "../../utils/data/registerData";
import { registerData } from "../../utils/data/registerData";

const Table = () => {
  return (
    <div
      className="w-[75%] h-auto ml-auto mr-auto mt-[5%] p-5"
      style={{
        boxShadow: "0px 4px 17px 2px rgba(0, 0, 0, 0.07)",
        borderRadius: "6px",
      }}
    >
      <h3 className="font-bold mb-[20px]">
        총 <span className="text-mainBlue">5</span>명
      </h3>
      <table className="w-[100%]">
        <thead>
          {registerCategory.map(category => (
            <th className="text-darkGray pr-auto pl-auto text-p pb-[20px] pt-[5px]">
              {category}
            </th>
          ))}
        </thead>
        <tbody>
          {registerData.map(item => (
            <List {...item} key={item.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
