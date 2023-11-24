import EventItem from "../_common/EventItem";
import { eventData } from "../../utils/data/eventData";
import EmptyMessage from "./EmptyMessage";
import { useState, useEffect } from "react";
import { getProgramLiked } from "../../api/program";

interface dataType {
  programId: number;
  title: string;
  category: "" | "PLAY" | "EXHIBIT" | "BAR" | "ACADEMIC" | "ETC";
  thumbnailImage: string;
  remainingDays: number;
  isOpen: boolean;
  goal: {
    targetNumber: number;
    registrantNumber: number;
    progressRate: number;
  };
  content: string;
  hasLike: boolean;
}

const LikedList = () => {
  const [data, setData] = useState([]);

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
          {data.map((item: dataType) => (
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
