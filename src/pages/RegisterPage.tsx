import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { eventDetailData } from "../utils/data/eventData";

import PlainNavBar from "../components/_common/PlainNavBar";
import InfoSection from "../components/RegisterPage/InfoSection";
import FormSection from "../components/RegisterPage/FormSection";

const RegisterPage = () => {
  const { id } = useParams();
  const [currentDetail, setCurrentDetail] = useState<EventDetailType>();
  const [info, setInfo] = useState<EventRegisterInfoType>();
  useEffect(() => {
    setCurrentDetail(eventDetailData);
  }, []);
  useEffect(() => {
    if (currentDetail)
      setInfo({
        isRegistered: currentDetail.member.hasRegistration,
        isHost: currentDetail.member.isHost,
        title: currentDetail.program.title,
        imageUrl: currentDetail.program.contentImages[0].url,
        category: currentDetail.program.category,
        progressRate: currentDetail.program.goal.progressRate,
        remainingDays: currentDetail.program.remainingDays,
        date: currentDetail.program.schedule,
        location: currentDetail.program.location,
        price: currentDetail.program.price,
        depositInfo: currentDetail.program.depositInfo,
      });
  }, [currentDetail]);
  return (
    <>
      <PlainNavBar isToMy={true} />
      <div className="w-full flex justify-center pt-[20px]">
        {info &&
          (info.isHost ? (
            <div></div>
          ) : info.isRegistered ? (
            <div></div>
          ) : (
            <div className="w-[640px] mobile:w-[calc(100%-40px)] h-10 flex flex-col items-center">
              <InfoSection {...info} />
              <FormSection />
            </div>
          ))}
      </div>
    </>
  );
};

export default RegisterPage;
