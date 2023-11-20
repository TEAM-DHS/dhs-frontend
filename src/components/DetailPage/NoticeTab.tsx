import React from "react";
import useParagraph from "../../utils/hooks/useParagraph";
import { ReactComponent as PinIcon } from "../../assets/Detail/pin.svg";

type Prop = {
  title: string;
  content: string;
  createdDate: string;
  name: string;
};
const Notice = ({ title, content, createdDate, name }: Prop) => {
  const noticeContent = useParagraph(content);
  return (
    <div className="max-w-[600px] mt-[20px] flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[5px] ml-[5px]">
        <div className="font-bold text-black text-smTitle">{name}</div>
        <div className="font-regular text-darkGray text-p">
          {Math.ceil(
            Math.abs(new Date().getTime() - new Date(createdDate).getTime()) /
              (1000 * 60 * 60 * 24),
          ) + "일 전"}
        </div>
      </div>
      <div className="font-bold text-mdTitle text-center text-black">
        {title}
      </div>
      <div className="font-regular text-smTitle text-center text-black">
        {noticeContent}
      </div>
    </div>
  );
};

type Props = {
  host: {
    name: string;
    description: string;
  };
  notices: EventNoticeType[];
};
const NoticeTab = ({ host, notices }: Props) => {
  return (
    <div className="w-[1160px] laptop:w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex flex-col">
      <div className="w-[116px] h-[28px] flex justify-center items-center gap-[4px] bg-[#FFF1F1] rounded-[4px]">
        <PinIcon fill="#f96353" width={15} height={15} />
        <div className="font-bold text-[12px] text-warningRed">
          주인장 업데이트
        </div>
      </div>
      <div className="flex flex-col gap-[70px]">
        {notices.map((item: EventNoticeType) => (
          <Notice {...item} name={host.name} key={item.noticeId} />
        ))}
      </div>
    </div>
  );
};

export default NoticeTab;
