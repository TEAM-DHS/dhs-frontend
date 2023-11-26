import { patchProgramClosed } from "../../api/program";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CloseModal = ({ setIsClose }: CloseModalProps) => {
  const { programId } = useParams();
  const nav = useNavigate();

  const patchClosed = async () => {
    try {
      const res = await patchProgramClosed(Number(programId));
      console.log(res);
      alert("행사가 마감되었습니다.");
      nav(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="w-[400px] h-[240px] rounded-[6px] bg-white flex flex-col items-center justify-center z-10 absolute"
        style={{ boxShadow: "0px 4px 17px 2px rgba(0, 0, 0, 0.07)" }}
      >
        <p className="text-[20px] mb-12">정말 행사를 마감하시겠어요?</p>
        <div className="flex gap-7">
          <button
            className="bg-mainBlue rounded-[12px] flex pl-[40px]  pr-[40px] pt-[8px] pb-[8px] items-center text-white font-regular font-bold"
            onClick={patchClosed}
          >
            확인
          </button>
          <button
            className="bg-lightBlue rounded-[12px] flex pl-[40px]  pr-[40px] pt-[8px] pb-[8px] items-center text-white font-regular font-bold"
            onClick={() => setIsClose(false)}
          >
            취소
          </button>
        </div>
      </div>
      <div className="w-[100vw] h-[100vh] bg-black z-0 opacity-30"></div>
    </div>
  );
};

export default CloseModal;
