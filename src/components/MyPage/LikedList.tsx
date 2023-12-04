import EventItem from "../_common/EventItem";
import EmptyMessage from "./EmptyMessage";
import { useState, useEffect } from "react";
import { myLikedData1, myLikedData2 } from "../../utils/data/myPageData";
import { getProgramLiked } from "../../api/program";
import PageNation from "./PageNation";

const LikedList = () => {
  const [data, setData] = useState<EventPreviewType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const itemsPerPage = 12;

  useEffect(() => {
    getLikedData();
    setTotalItems(data.length);
  }, []);

  const getLikedData = async () => {
    // try {
    //   const res = await getProgramLiked(currentPage);
    //   console.log(res);
    //   const d = res.programs;
    //   setData(d);
    //   setTotalPages(res.pageInfo.totalPages);
    // } catch (err) {
    //   console.log(err);
    // }
    setTotalPages(myLikedData1.pageInfo.totalPages);
    if (currentPage === 0) {
      setData(myLikedData1.programs);
    } else if (currentPage === 1) {
      setData(myLikedData2.programs);
    }
  };

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="w-[calc(100%-100px)] ml-auto mr-auto flex flex-wrap gap-[30px] mobile:w-[calc(100%-40px)] mt-[5%]">
            {data.map(item => (
              <EventItem {...item} key={item.programId} />
            ))}
          </div>
          <PageNation
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={totalItems}
            setData={setData}
            category="heart"
            getData={getLikedData}
          />
        </>
      ) : (
        <EmptyMessage message="찜한 행사가 없어요!" />
      )}
    </>
  );
};

export default LikedList;
