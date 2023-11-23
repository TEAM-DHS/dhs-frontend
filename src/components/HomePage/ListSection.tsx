import React from "react";
import EventItem from "../_common/EventItem";

import { eventData } from "../../utils/data/eventData";
import { useRecoilValue } from "recoil";
import { filterState } from "../../services/store/event";

const ListSection = () => {
  const filter = useRecoilValue(filterState);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[calc(100%-100px)] flex pb-[20px]">
        <div className="font-regular text-p text-darkGray">
          {filter.keyword === ""
            ? `총 ${eventData.length}개의 행사`
            : `'${filter.keyword}' 검색 결과 ${eventData.length}개`}
        </div>
      </div>
      <div className="w-[calc(100%-100px)] flex flex-wrap gap-[30px] pb-[100px] mobile:w-[calc(100%-40px)]">
        {eventData.map(item => (
          <EventItem {...item} key={item.programId} />
        ))}
      </div>
    </div>
  );
};

export default ListSection;
