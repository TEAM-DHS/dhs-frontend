import Question from "./Question";

interface BankType {
  depositAccount: string;
  setDepositAccount: React.Dispatch<React.SetStateAction<string>>;
  depositBank: string;
  setDepositBank: React.Dispatch<React.SetStateAction<string>>;
  depositName: string;
  setDepositName: React.Dispatch<React.SetStateAction<string>>;
}

const Bank = ({
  depositAccount,
  setDepositAccount,
  depositBank,
  setDepositBank,
  depositName,
  setDepositName,
}: BankType) => {
  return (
    <>
      <Question title="예금주, 은행명, 계좌번호를 입력해주세요." />
      <div className="flex gap-3 mt-6 ">
        <input
          className="text-neutral-500 leading-5 border grow items-center px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none text-center w-5"
          placeholder="예금주"
          value={depositName}
          onChange={e => setDepositName(e.target.value)}
        />
        <input
          className="text-neutral-500 leading-5 border grow items-center px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none text-center w-5"
          placeholder="은행명"
          value={depositBank}
          onChange={e => setDepositBank(e.target.value)}
        />
        <input
          className="text-neutral-500 leading-5 border grow items-center px-5 py-3 rounded-3xl border-solid border-neutral-200 outline-none text-center w-5"
          placeholder="계좌번호"
          value={depositAccount}
          onChange={e => setDepositAccount(e.target.value)}
        />
      </div>
    </>
  );
};

export default Bank;
