import Question from "./Question";
import { useState } from "react";

interface DescriptionType {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Description = ({ content, setContent }: DescriptionType) => {
  return (
    <>
      <Question title="행사에 대해 자세히 소개해주세요." />
      <textarea
        className="border flex shrink-0 h-[100px] flex-col mt-6 rounded-lg border-solid border-neutral-200 font-regular px-4 py-2"
        style={{ outline: "none" }}
        maxLength={499}
        onChange={e => {
          setContent(e.target.value);
        }}
        value={content}
      />
      <div className="text-neutral-500 text-right text-xs leading-4  mt-3.5 self-end">
        {content.length}/500
      </div>
    </>
  );
};

export default Description;
