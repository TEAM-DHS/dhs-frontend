import Question from "./Question";
import { useState } from "react";

interface PriceType {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
}

const Price = ({ price, setPrice }: PriceType) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Question title="가격을 입력해주세요." />
        <div className="flex items-stretch justify-between gap-3 mt-[50px]">
          <input
            value={price === "" ? "" : price}
            type="number"
            className="text-neutral-500 text-base leading-5 border grow items-center px-3 py-2 rounded-3xl border-solid border-neutral-200 w-[150px] text-center outline-none"
            onChange={e => setPrice(e.target.value)}
          />
          <div className="text-black text-base leading-5 self-center grow whitespace-nowrap my-auto">
            원
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
