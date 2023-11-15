import React from "react";
import SearchBar from "./SearchBar";
import EventItem from "../_common/EventItem";

import { eventData } from "../../utils/data/eventData";
import { useRecoilValue } from "recoil";
import { filterState } from "../../services/store/event";
import SortBar from "./SortBar";

const ListSection = () => {
  const filter = useRecoilValue(filterState);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mobile:w-[calc(100%-40px)] pt-[30px]">
        <SearchBar isListPage={true} />
      </div>
      <div className="w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex justify-between pt-[20px] pb-[30px]">
        <div className="font-regular text-p text-darkGray">
          {filter.search === ""
            ? `총 ${eventData.length}개의 행사`
            : `'${filter.search}' 검색 결과 ${eventData.length}개`}
        </div>
        <SortBar />
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
