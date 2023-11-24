import EventItem from "../_common/EventItem";
import EmptyMessage from "./EmptyMessage";
import { getProgramCreated } from "../../api/program";
import { useState, useEffect } from "react";

const CreatedList = () => {
  const [data, setData] = useState<EventPreviewType[]>([]);

  useEffect(() => {
    getCreatedData();
  }, []);

  const getCreatedData = async () => {
    try {
      const res = await getProgramCreated();
      setData(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {data ? (
        <div className="w-[calc(100%-100px)] ml-auto mr-auto flex flex-wrap gap-[30px] mobile:w-[calc(100%-40px)] mt-[5%]">
          {data.map(item => (
            <EventItem {...item} key={item.programId} isRegist={true} />
          ))}
        </div>
      ) : (
        <EmptyMessage message="등록한 행사가 없어요!" />
      )}
    </>
  );
};

export default CreatedList;
