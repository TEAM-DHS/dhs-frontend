import Question from "./Question";
import { useState } from "react";

const EventTitle = () => {
  const [text, setText] = useState("");

  return (
    <>
      <Question title="행사의 제목을 입력해주세요." />
      <input
        className="border flex shrink-0 h-[41px] flex-col mt-6 rounded-lg border-solid border-neutral-200 font-regular px-4"
        style={{ outline: "none" }}
        maxLength={29}
        onChange={e => {
          setText(e.target.value);
        }}
        value={text}
      />
      <div className="text-neutral-500 text-right text-xs leading-4  mt-3.5 self-end">
        {text.length}/30
      </div>
    </>
  );
};

export default EventTitle;
