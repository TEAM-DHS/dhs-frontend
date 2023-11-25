import EventItem from "../_common/EventItem";
import EmptyMessage from "./EmptyMessage";
import { useState, useEffect } from "react";
import { getProgramLiked } from "../../api/program";
import { eventData } from "../../utils/data/eventData";
import PageNation from "./PageNation";

const LikedList = () => {
  const [data, setData] = useState<EventPreviewType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(10);

  const itemsPerPage = 9;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = eventData.slice(startIdx, endIdx);

  useEffect(() => {
    // getLikedData();
    setTotalItems(data.length);
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, []);

  const getLikedData = async () => {
    try {
      const res = await getProgramLiked(currentPage);
      setData(res.slice(startIdx, endIdx));
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {currentItems.length > 0 ? (
        <>
          <div className="w-[calc(100%-100px)] ml-auto mr-auto flex flex-wrap gap-[30px] mobile:w-[calc(100%-40px)] mt-[5%]">
            {currentItems.map(item => (
              <EventItem {...item} key={item.programId} />
            ))}
          </div>
          <PageNation
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={totalItems}
          />
        </>
      ) : (
        <EmptyMessage message="찜한 행사가 없어요!" />
      )}
    </>
  );
};

export default LikedList;
