import React from "react";
import useCategoryText from "../../utils/hooks/useCategoryText";

const InfoSection = ({
  title,
  imageUrl,
  category,
  progressRate,
  remainingDays,
  date,
  location,
  price,
  depositInfo,
}: EventRegisterInfoType) => {
  const infoBox = [
    {
      text: "일정",
      content: new Date(date).toLocaleString("ko", {
        hour: "numeric",
        minute: "numeric",
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    { text: "장소", content: location },
    {
      text: "가격",
      content: price.includes("원")
        ? price
        : `${Number(price).toLocaleString()}원`,
    },
    { text: "입금처", content: depositInfo },
  ];
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex gap-[20px] mt-[20px] mobile:flex-col mobile:items-center">
        <div className="w-[150px] h-[200px] overflow-hidden mobile:w-[40vw] mobile:h-[60vw]">
          <img src={imageUrl} className="w-full h-full object-cover" />
        </div>
        <div className="w-[calc(100%-170px)] flex flex-col mt-[4px] mobile:w-[100%]">
          <div className="font-bold text-p text-darkGray">{category}</div>
          <div className="font-bold text-mdTitle text-black my-[5px]">
            {title}
          </div>
          <div className="flex font-bold text-p text-mainBlue">
            {progressRate + "%"}&nbsp;
            <div className="text-darkGray">
              {"| " + remainingDays + "일 남음"}
            </div>
          </div>
          <div className="w-full min-h-[180px] grid grid-cols-[1fr_3fr] items-stretch mt-[16px] border-[1px] border-lightGray rounded-[8px] py-[16px] px-[24px]">
            {infoBox.map(item => (
              <React.Fragment key={item.text}>
                <div className="font-bold flex items-center">{item.text}</div>
                <div className="font-regular flex items-center">
                  {item.content}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] border-b-[1px] border-lightGray mt-[50px]" />
    </div>
  );
};

export default InfoSection;
