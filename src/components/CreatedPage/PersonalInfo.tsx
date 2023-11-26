import Question from "./Question";

const PersonalInfo = ({ agree, setAgree }: PersonalInfoType) => {
  return (
    <>
      <Question title="개인정보 수집 동의서 " />
      <div className="flex w-[291px] items-stretch gap-2.5 mt-6">
        <input
          checked={agree}
          onChange={e => setAgree(e.target.checked)}
          type="checkbox"
          className="border flex w-[20px] shrink-0 h-[20px] flex-col rounded-md border-solid border-neutral-200"
        />
        <div className="text-md leading-4 whitespace-nowrap my-auto">
          정보 입력 후 수정이 불가합니다. (공지사항 등록은 가능)
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
