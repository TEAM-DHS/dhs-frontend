import Question from "./Question";

const EndDate = () => {
  return (
    <>
      <Question title="신청 마감 날짜를 선택해주세요." />
      <input
        type="date"
        className="leading-5 border w-[100%] items-center mt-6 px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none"
      />
    </>
  );
};
export default EndDate;
