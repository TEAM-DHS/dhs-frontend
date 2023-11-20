import { useState, useRef } from "react";
import PlanTab from "./PlanTab";
import NoticeTab from "./NoticeTab";
import LocationTab from "./LocationTab";

export type TabType = "행사 계획" | "공지사항" | "위치";
const tabList: TabType[] = ["행사 계획", "공지사항", "위치"];

const TabSection = ({ program }: EventDetailType) => {
  const [tab, setTab] = useState<TabType>("행사 계획");
  const tabRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full flex flex-col items-center gap-[60px]">
      <div
        ref={tabRef}
        className="w-full h-[63px] border-t-[1px] border-b-[1px] border-lightGray flex justify-center"
      >
        <div className="w-[1160px] laptop:w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] mobile:justify-evenly h-full flex justify-start gap-[10px]">
          {tabList.map(item => (
            <div
              className={`h-full flex items-center font-bold text-smTitle mt-[2px] px-[5px] border-b-[3px] cursor-default ${
                item === tab
                  ? " border-black text-black"
                  : "border-transparent text-darkGray"
              }`}
              onClick={() => setTab(item)}
              key={item}
            >
              {item}
              {item == "공지사항" && (
                <div className="text-sm ml-[5px] mb-[3px]">
                  {program.notices.length}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {tab === "행사 계획" ? (
        <PlanTab {...program} tabRef={tabRef} setTab={setTab} />
      ) : tab === "공지사항" ? (
        <NoticeTab {...program} />
      ) : tab === "위치" ? (
        <LocationTab {...program} />
      ) : null}
    </div>
  );
};

export default TabSection;
