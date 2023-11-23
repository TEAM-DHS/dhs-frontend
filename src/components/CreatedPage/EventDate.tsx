import Question from "./Question";

interface EventDateType {
  schedule: string;
  setSchedule: React.Dispatch<React.SetStateAction<string>>;
}

const EventDate = (data: EventDateType) => {
  return (
    <>
      <Question title="행사 날짜를 입력해주세요." />
      <input
        type="date"
        className="leading-5 border w-[100%] items-center mt-6 px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none"
      />
    </>
  );
};
export default EventDate;
