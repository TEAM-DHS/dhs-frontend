import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { eventDetailData } from "../utils/data/eventData";
import CategoryNavBar from "../components/_common/CategoryNavBar";
import InfoSection from "../components/DetailPage/InfoSection";
import TabSection from "../components/DetailPage/TabSection";
import OtherSection from "../components/DetailPage/OtherSection";

import { getProgramDetail } from "../api/program";

const DetailPage = () => {
  const { id } = useParams();
  const [currentDetail, setCurrentDetail] = useState<EventDetailType>();
  const [updateTrigger, setUpdateTrigger] = useState<number>(0);
  useEffect(() => {
    getProgramDetail(Number(id))
      .then(res => setCurrentDetail(res))
      .catch(err => console.log(err));
    setCurrentDetail(eventDetailData);
  }, [updateTrigger]);
  return (
    <>
      <CategoryNavBar />
      {currentDetail && (
        <div className="w-full flex flex-col items-center pt-[200px] gap-[70px]">
          <InfoSection
            {...currentDetail}
            trigger={updateTrigger}
            setTrigger={setUpdateTrigger}
          />
          <TabSection {...currentDetail} />
          <OtherSection {...currentDetail} />
        </div>
      )}
    </>
  );
};

export default DetailPage;
