import Question from "./Question";
import { useState } from "react";

const Bank = () => {
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [num, setNum] = useState("");

  return (
    <>
      <Question title="예금주, 은행명, 계좌번호를 입력해주세요." />
      <div className="flex gap-3 mt-6 ">
        <input
          className="text-neutral-500 leading-5 border grow items-center px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none text-center w-5"
          placeholder="예금주"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="text-neutral-500 leading-5 border grow items-center px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none text-center w-5"
          placeholder="은행명"
          value={bank}
          onChange={e => setBank(e.target.value)}
        />
        <input
          className="text-neutral-500 leading-5 border grow items-center px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none text-center w-5"
          placeholder="계좌번호"
          value={num}
          onChange={e => setNum(e.target.value)}
        />
      </div>
    </>
  );
};

export default Bank;
