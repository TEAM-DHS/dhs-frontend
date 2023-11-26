import List from "./List";
import { registerCategory } from "../../utils/data/registerData";
import CloseButton from "./CloseButton";
import CloseModal from "./CloseModal";
import { useState } from "react";

const Table = (data: TableProps) => {
  const [isClose, setIsClose] = useState(false);
  const amount = localStorage.getItem("amount")

  return (
    <>
      {isClose && <CloseModal setIsClose={setIsClose} />}
      <div className="w-[75%] ml-auto mr-auto mt-[5%]">
        <div
          className=" h-auto p-5"
          style={{
            boxShadow: "0px 4px 17px 2px rgba(0, 0, 0, 0.07)",
            borderRadius: "6px",
          }}
        >
          <h3 className="font-bold mb-[20px]">
            총 <span className="text-mainBlue">{amount}</span>명
          </h3>
          <table className="w-[100%]">
            <thead>
              <tr>
                {registerCategory.map((category, i) => (
                  <th
                    className="text-darkGray pr-auto pl-auto text-p pb-[20px] pt-[5px]"
                    key={i}
                  >
                    {category}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.data.map(item => (
                <List {...item} key={item.name} />
              ))}
            </tbody>
          </table>
        </div>
        <CloseButton setIsClose={setIsClose} />
      </div>
    </>
  );
};

export default Table;
