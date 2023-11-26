import Question from "./Question";

const EventDate = ({ schedule, setSchedule }: EventDateType) => {
  const ConvertAndSaveDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let convertedDate = e.target.value + ":00";
    setSchedule(convertedDate);
  };

  return (
    <>
      <Question title="행사 날짜를 입력해주세요." />
      <input
        type="datetime-local"
        className="leading-5 border w-[100%] items-center mt-6 px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none"
        value={schedule}
        onChange={e => ConvertAndSaveDate(e)}
      />
    </>
  );
};
export default EventDate;
