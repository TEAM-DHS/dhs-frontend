import Question from "./Question";
import { useState } from "react";

const People = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <div className="flex items-center justify-between">
        <Question title="목표 인원을 입력해주세요." />
        <div className="flex items-stretch justify-between gap-3 mt-[50px]">
          <input
            value={num}
            type="number"
            className="text-neutral-500 text-base leading-5 border grow items-center px-3 py-2 rounded-3xl border-solid border-neutral-200 w-[100px] text-center outline-none"
            onChange={e => setNum(Number(e.target.value))}
          />
          <div className="text-black text-base leading-5 self-center grow whitespace-nowrap my-auto">
            명
          </div>
        </div>
      </div>
    </>
  );
};

export default People;