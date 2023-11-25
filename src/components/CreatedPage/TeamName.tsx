import Question from "./Question";

interface TeamNameType {
  hostName: string;
  setHostName: React.Dispatch<React.SetStateAction<string>>;
}

const TeamName = ({ hostName, setHostName }: TeamNameType) => {
  return (
    <>
      <Question title="팀 이름을 입력해주세요." />
      <input
        className="border flex shrink-0 h-[41px] flex-col mt-6 rounded-lg border-solid border-neutral-200 font-regular px-4"
        style={{ outline: "none" }}
        maxLength={29}
        onChange={e => {
          setHostName(e.target.value);
        }}
        value={hostName}
      />
      <div className="text-neutral-500 text-right text-xs leading-4  mt-3.5 self-end">
        {hostName.length}/30
      </div>
    </>
  );
};

export default TeamName;
