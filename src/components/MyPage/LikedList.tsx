import EventItem from "../_common/EventItem";
import EmptyMessage from "./EmptyMessage";
import { useState, useEffect } from "react";
import { getProgramLiked } from "../../api/program";
import { eventData } from "../../utils/data/eventData";
import { useNavigate } from "react-router-dom";

const LikedList = () => {
  const [data, setData] = useState<EventPreviewType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(10);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const nav = useNavigate();
  const itemsPerPage = 9;

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentItems = eventData.slice(startIdx, endIdx);

  useEffect(() => {
    // getLikedData();
    setTotalItems(eventData.length);
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
  }, []);

  useEffect(() => {
    setPageNumbers(
      Array.from(
        { length: Math.ceil(totalItems / itemsPerPage) },
        (_, i) => i + 1,
      ),
    );
  }, [totalItems, itemsPerPage]);

  useEffect(() => {
    nav(`/mypage?category=heart&page=${currentPage}`);
  }, [currentPage]);

  const getLikedData = async () => {
    try {
      const res = await getProgramLiked(currentPage);
      setData(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => {
        return prevPage + 1;
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => {
        return prevPage - 1;
      });
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
          <div className="flex items-center justify-center mb-[10rem] mt-[5rem] text-[22px]">
            <button onClick={handlePrevPage} className="mr-6 ">
              {"<"}
            </button>
            {pageNumbers.map((page, i) => (
              <p
                key={i}
                className={`mr-3 ml-3 text-[20px] ${
                  page === currentPage ? "text-mainBlue font-bold" : ""
                }`}
              >
                {page}
              </p>
            ))}
            <button onClick={handleNextPage} className="ml-6 ">
              {">"}
            </button>
          </div>
        </>
      ) : (
        <EmptyMessage message="찜한 행사가 없어요!" />
      )}
    </>
  );
};

export default LikedList;
