import { useNavigate } from "react-router-dom";
import CategoryBlock from "./CategoryBlock";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import { ReactComponent as ArrowCircleIcon } from "../../assets/My/arrow_circle_right.svg";

interface Props extends EventPreviewType {
  isRegist?: boolean;
}
const EventItem = ({
  programId,
  title,
  thumbnail,
  category,
  content,
  isOpen,
  remainingDays,
  goal,
  hasLike,
  isRegist,
}: Props) => {
  const nav = useNavigate();
  return (
    <div
      className={`w-[calc((100%-60px)/3)] min-w-[310px] h-[250px] flex flex-col mb-[40px] twocol:w-[calc((100%-60px)/2)] onecol:w-full${
        isRegist ? " items-end h-[265px]" : ""
      }`}
      onClick={() => nav(`/detail/${programId}`)}
    >
      <div className="flex gap-[20px]">
        <div className="w-[140px] h-[185px] flex-shrink-0 relative">
          <img src={thumbnail} className="w-full h-full object-cover" />
          {!isOpen && (
            <div className="w-full h-full top-0 left-0 absolute z-10 bg-black/50 flex justify-center items-center">
              <div className="font-regular text-smTitle text-white text-center leading-tight">
                참가 신청 <br /> 종료
              </div>
            </div>
          )}
        </div>
        <div className="w-[calc(100%-160px)] min-w-[150px] flex flex-col">
          <div className="flex justify-between">
            <CategoryBlock text={category} />
            <HeartIcon
              stroke={hasLike ? "transparent" : "#B1CCFF"}
              fill={hasLike ? "#185ADB" : "#ffffff"}
              className="cursor-pointer"
            />
          </div>
          <div className="font-bold text-smTitle text-slateBlack my-[13px] leading-tight line-clamp-3">
            {title}
          </div>
          <div className="font-regular text-p text-darkGray leading-tight line-clamp-3">
            {content}
          </div>
        </div>
      </div>
      {goal && (
        <div className="w-full flex flex-col mt-[16px]">
          <div className="flex justify-between items-center mb-[10px]">
            <div className="flex items-center gap-[6px]">
              <div
                className={`font-bold text-mdTitle ${
                  isOpen ? "text-mainBlue" : "text-darkGray"
                }`}
              >
                {goal.progressRate + "%"}
              </div>
              <div className="font-regular text-sm text-darkGray mt-[5px]">
                {"(" + goal.registrationNumber + "/" + goal.targetNumber + ")"}
              </div>
            </div>
            <div className="flex items-center gap-[5px] mt-[5px]">
              <div className="font-regular text-sm text-darkGray">
                참가 신청 마감
              </div>
              {isOpen && (
                <div className="font-regular text-p text-slateBlack">
                  {"D-" + remainingDays}
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-[5px] bg-lightGray rounded-full">
            <div
              className={`h-[5px] ${
                isOpen ? "bg-mainBlue" : "bg-darkGray"
              } rounded-full`}
              style={{ width: `${goal.progressRate}%` }}
            ></div>
          </div>
        </div>
      )}
      {isRegist && (
        <div
          className="flex items-center gap-[6px] mt-[16px] cursor-pointer"
          onClick={() => nav(`/path/${programId}`)}
        >
          <div className="font-regular text-p text-black">신청자 조회하기</div>
          <ArrowCircleIcon />
        </div>
      )}
    </div>
  );
};

export default EventItem;