import React from "react";
import EventItem from "../_common/EventItem";

const OtherSection = ({ otherPrograms }: EventDetailType) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full border-b-[1px] border-lightGray my-[60px]" />
      <div className="w-[1160px] laptop:w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex justify-start font-bold text-mdTitle mb-[40px]">
        이런 행사는 어떠신가요?
      </div>
      <div className="w-[1160px] laptop:w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex flex-wrap gap-[30px] pb-[160px]">
        {otherPrograms.map(item => (
          <EventItem {...item} key={item.programId} />
        ))}
      </div>
    </div>
  );
};

export default OtherSection;
