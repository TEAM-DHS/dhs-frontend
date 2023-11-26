import { ReactElement } from "react";
import { TabType } from "./TabSection";
import useParagraph from "../../utils/hooks/useParagraph";
import { ReactComponent as NoticeIcon } from "../../assets/Detail/notice.svg";
import { ReactComponent as LineArrowIcon } from "../../assets/Detail/line_arrow.svg";

type Props = {
  content: string;
  notices: EventNoticeType[];
  host: {
    name: string;
    description: string;
  };
  tabRef: React.RefObject<HTMLDivElement>;
  setTab: (tab: TabType) => void;
};

type NoticePreviewType = {
  title: string;
  content: ReactElement | string;
};

const PlanTab = ({ content, notices, host, tabRef, setTab }: Props) => {
  const noticePreview: NoticePreviewType = {
    title: notices.length !== 0 ? notices[notices.length - 1].title : "",
    content: useParagraph(
      notices.length !== 0 ? notices[notices.length - 1].content : "",
    ),
  };
  return (
    <div className="w-[1160px] laptop:w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex middle:flex-col-reverse justify-between gap-[80px]">
      <div className="max-w-[600px] middle:max-w-full flex flex-col gap-[70px]">
        <div className="font-bold text-mdTitle text-black">행사 소개</div>
        <div className="font-regular text-smTitle text-center text-black">
          {useParagraph(content)}
        </div>
        <div className="font-bold text-mdTitle text-black mt-[80px]">
          주인장 소개
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <div className="font-regular text-[20px] text-center text-black">
            {host.name}
          </div>
          <div className="font-regular text-smTitle text-center text-black">
            {host.description}
          </div>
        </div>
      </div>
      {notices.length !== 0 && (
        <div className="p-[25px] w-[360px] h-min max-h-[500px] middle:w-full flex flex-shrink-0 flex-col gap-[40px] middle:gap-[20px] border-[1px] border-lightGray rounded-[5px] shadow-[0px_2px_3px_0px] shadow-black/10">
          <div className="w-[140px] h-[28px] flex justify-center items-center gap-[5px] bg-whiteBlue rounded-[4px]">
            <NoticeIcon />
            <div className="font-bold text-[12px] text-mainBlue">
              공지사항 업데이트
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="font-bold text-black text-smTitle text-center">
              {noticePreview.title}
            </div>
            <div className="font-regular text-black text-smTitle text-center line-clamp-[10] middle:line-clamp-5 mobile:line-clamp-3">
              {noticePreview.content}
            </div>
          </div>
          <div className="flex justify-end">
            <div
              className="font-regular text-black text-p flex items-center gap-[5px] cursor-pointer"
              onClick={() => {
                setTab("공지사항");
                window.scrollTo(0, tabRef.current!.offsetTop - 126);
              }}
            >
              더보기
              <LineArrowIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanTab;
