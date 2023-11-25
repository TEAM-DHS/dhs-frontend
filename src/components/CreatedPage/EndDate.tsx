import Question from "./Question";

interface EndDateType {
  deadline: string;
  setDeadline: React.Dispatch<React.SetStateAction<string>>;
}

const EndDate = ({ deadline, setDeadline }: EndDateType) => {
  const ConvertAndSaveDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let convertedDate = e.target.value + ":00";
    setDeadline(convertedDate);
  };

  return (
    <>
      <Question title="신청 마감 날짜를 입력해주세요." />
      <input
        type="datetime-local"
        className="leading-5 border w-[100%] items-center mt-6 px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none"
        value={deadline}
        onChange={e => ConvertAndSaveDate(e)}
      />
    </>
  );
};
export default EndDate;
