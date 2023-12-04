import React, { useRef } from "react";
import EventItem from "../_common/EventItem";
import SearchBar from "../ListPage/SearchBar";
import SortBar from "../ListPage/SortBar";

import { eventData } from "../../utils/data/eventData";
import { useRecoilValue } from "recoil";
import { filterState } from "../../services/store/event";

import { useProgramList } from "../../api/program";

type Props = { isCategory?: boolean };
const ListSection = ({ isCategory }: Props) => {
  // const { pageLastItemRef, hasNextPage, data } = useProgramList(filter);
  const pageLastItemRef = useRef<HTMLDivElement>(null);
  const listTopRef = useRef<HTMLDivElement>(null);
  const filter = useRecoilValue(filterState);

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
        className={`w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex ${
          isCategory
            ? "mobile:w-[calc(100%-40px)] justify-between pt-[20px] pb-[30px]"
            : "pb-[20px]"
        }`}
        ref={listTopRef}
      >
        {eventData && (
          <div className="font-regular text-p text-darkGray">
            {filter.keyword === ""
              ? `총 ${eventData.pages[0].data.pageInfo.totalElements}개의 행사`
              : `'${filter.keyword}' 검색 결과 ${eventData.pages[0].data.pageInfo.totalElements}개`}
          </div>
        )}
        {isCategory && <SortBar />}
      </div>
      <div className="w-[calc(100%-100px)] min-h-[100svh] flex flex-wrap gap-[30px] pb-[100px] mobile:w-[calc(100%-40px)]">
        {eventData &&
          eventData.pages.map(page =>
            page.data.programs.length === 0 ? (
              <div className="py-[30px] w-full flex justify-center">
                <div className="font-regular text-smTitle text-slateBlack">
                  검색 결과가 없습니다.
                </div>
              </div>
            ) : (
              page.data.programs.map((item, idx) =>
                page.data.pageInfo.pageSize === idx + 1 ? (
                  <React.Fragment key={item.programId}>
                    <EventItem {...item} refObject={pageLastItemRef} />
                  </React.Fragment>
                ) : (
                  <EventItem {...item} key={item.programId} />
                ),
              )
            ),
          )}
      </div>
      {eventData &&
        // && !hasNextPage
        eventData.pages[0].data.programs.length !== 0 && (
          <div
            onClick={() =>
              listTopRef.current?.scrollIntoView({
                behavior: "auto",
                block: "center",
              })
            }
          >
            <div className="py-[30px] font-regular text-p underline text-slateBlack cursor-pointer">
              맨 위로 가기
            </div>
          </div>
        )}
    </div>
  );
};

export default ListSection;
