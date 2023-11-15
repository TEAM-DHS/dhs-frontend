import EventItem from "../_common/EventItem";
import { eventData } from "../../utils/data/eventData";
import EmptyMessage from "./EmptyMessage";

const LikedList = () => {
  return (
    <>
      {eventData ? (
        <div className="w-[calc(100%-100px)] ml-auto mr-auto flex flex-wrap gap-[30px] mobile:w-[calc(100%-40px)] mt-[5%]">
          {eventData.map(item => (
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
