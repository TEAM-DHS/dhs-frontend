import { useState, useEffect } from "react";
import EventItem from "../_common/EventItem";
import SearchBar from "../ListPage/SearchBar";
import SortBar from "../ListPage/SortBar";

import { eventData } from "../../utils/data/eventData";
import { useRecoilValue } from "recoil";
import { filterState } from "../../services/store/event";

import { useProgramList } from "../../api/program";

type Props = { isCategory?: boolean };
const ListSection = ({ isCategory }: Props) => {
  const filter = useRecoilValue(filterState);
  const { pageLastItemRef, hasNextPage, data } = useProgramList(filter);
  return (
    <div
      className={`w-full flex flex-col items-center${
        isCategory ? " pt-[126px]" : ""
      }`}
    >
      {isCategory && (
        <div className="mobile:w-[calc(100%-40px)] pt-[30px]">
          <SearchBar isListPage={true} />
        </div>
      )}
      <div
        className={`w-[calc(100%-100px)] flex ${
          isCategory
            ? "mobile:w-[calc(100%-40px)] justify-between pt-[20px] pb-[30px]"
            : "pb-[20px]"
        }`}
      >
        <div className="font-regular text-p text-darkGray">
          {filter.keyword === ""
            ? `총 ${eventData.length}개의 행사`
            : `'${filter.keyword}' 검색 결과 ${eventData.length}개`}
        </div>
        {isCategory && <SortBar />}
      </div>
      <div className="w-[calc(100%-100px)] flex flex-wrap gap-[30px] pb-[100px] mobile:w-[calc(100%-40px)]">
        {eventData.map(item => (
          <EventItem {...item} key={item.programId} />
        ))}

        {data &&
          data.pages.map(page =>
            page.data.data.programs.length === 0 ? (
              <div>
                <div>검색 결과가 없습니다</div>
              </div>
            ) : (
              page.data.data.programs.map(
                (item: EventPreviewType, idx: number) =>
                  page.data.data.pageInfo.pageSize === idx + 1 ? (
                    <div key={item.programId} ref={pageLastItemRef}>
                      <EventItem {...item} />
                    </div>
                  ) : (
                    <EventItem {...item} key={item.programId} />
                  ),
              )
            ),
          )}
      </div>
      {data &&
        !hasNextPage &&
        data.pages[0].data.data.programs.length !== 0 && (
          <div onClick={() => window.scrollTo(0, 0)}>
            <p>맨 위로 가기</p>
          </div>
        )}
    </div>
  );
};

export default ListSection;
