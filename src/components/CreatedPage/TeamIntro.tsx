import Question from "./Question";
import { useState } from "react";

const TeamIntro = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Question title="우리 팀에 대해 소개해주세요." />
      <textarea
        className="border flex shrink-0 h-[100px] flex-col mt-6 rounded-lg border-solid border-neutral-200 font-regular px-4 py-2"
        style={{ outline: "none" }}
        maxLength={499}
        onChange={e => {
          setText(e.target.value);
        }}
        value={text}
      />
      <div className="text-neutral-500 text-right text-xs leading-4  mt-3.5 self-end">
        {text.length}/500
      </div>
    </>
  );
};

export default TeamIntro;
