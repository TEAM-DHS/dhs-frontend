import EventItem from "../_common/EventItem";
import EmptyMessage from "./EmptyMessage";
import { useState, useEffect } from "react";
import { getProgramRegistered } from "../../api/program";

const RegisteredList = () => {
  const [data, setData] = useState<EventPreviewType[]>([]);

  useEffect(() => {
    getRegisteredData();
  }, []);

  const getRegisteredData = async () => {
    try {
      const res = await getProgramRegistered();
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
            <EventItem {...item} key={item.programId} />
          ))}
        </div>
      ) : (
        <EmptyMessage message="신청한 행사가 없어요!" />
      )}
    </>
  );
};

export default RegisteredList;
