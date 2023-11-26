import Question from "./Question";

const TeamIntro = ({ hostDescription, setHostDescription }: TeamIntroType) => {
  return (
    <>
      <Question title="우리 팀에 대해 소개해주세요." />
      <textarea
        className="border flex shrink-0 h-[100px] flex-col mt-6 rounded-lg border-solid border-neutral-200 font-regular px-4 py-2"
        style={{ outline: "none" }}
        maxLength={499}
        onChange={e => {
          setHostDescription(e.target.value);
        }}
        value={hostDescription}
      />
      <div className="text-neutral-500 text-right text-xs leading-4  mt-3.5 self-end">
        {hostDescription.length}/500
      </div>
    </>
  );
};

export default TeamIntro;
