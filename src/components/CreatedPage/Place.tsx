import Question from "./Question";

const Place = () => {
  return (
    <>
      <Question title="장소를 입력해주세요." />
      <div className="flex gap-4 mt-6">
        <div className="border flex w-[75%] shrink-0 py-3 flex-col rounded-3xl border-solid border-neutral-200" />
        <button className="text-white leading-5 border bg-blue-700 items-center px-5 py-3 rounded-3xl border-solid border-blue-700 w-[25%]">
          검색
        </button>
      </div>
    </>
  );
};
export default Place;
