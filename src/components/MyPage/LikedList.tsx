import EventItem from "../_common/EventItem";
import EmptyMessage from "./EmptyMessage";
import { useState, useEffect } from "react";
import { getProgramLiked } from "../../api/program";

const LikedList = () => {
  const [data, setData] = useState<EventPreviewType[]>([]);

  useEffect(() => {
    getLikedData();
  }, []);

  const getLikedData = async () => {
    try {
      const res = await getProgramLiked();
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
        <EmptyMessage message="찜한 행사가 없어요!" />
      )}
    </>
  );
};

export default LikedList;
