import { useState } from "react";
import CategoryBlock from "./CategoryBlock";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";

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
}: EventPreviewType) => {
  return (
    <div className="w-[calc((100%-60px)/3)] min-w-[310px] h-[250px] flex flex-col mb-[40px] twocol:w-[calc((100%-60px)/2)] onecol:w-full">
      <div className="flex gap-[20px]">
        <div className="w-[140px] h-[185px] flex-shrink-0">
          <img src={thumbnail} className="w-full h-full object-cover" />
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
        <div className="flex flex-col mt-[16px]">
          <div className="flex justify-between items-center mb-[10px]">
            <div className="flex items-center gap-[6px]">
              <div className="font-bold text-mdTitle text-mainBlue">
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
              <div className="font-regular text-p text-slateBlack">
                {"D-" + remainingDays}
              </div>
            </div>
          </div>
          <div className="w-full h-[5px] bg-lightGray rounded-full">
            <div
              className="h-[5px] bg-mainBlue rounded-full"
              style={{ width: `${goal.progressRate}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventItem;
