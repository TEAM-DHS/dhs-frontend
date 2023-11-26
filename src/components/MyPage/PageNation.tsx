import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNation = ({
  itemsPerPage,
  currentPage,
  totalPages,
  setCurrentPage,
  category,
  getData,
}: PageType) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    setPageNumbers(Array.from({ length: totalPages }, (_, i) => i + 1));
  }, [totalPages, itemsPerPage]);

  useEffect(() => {
    getData();
    if (category === "heart") {
      nav(`/mypage?category=heart&page=${currentPage}`);
    } else if (category === "created") {
      nav(`/mypage?category=created&page=${currentPage}`);
    } else if (category === "register") {
      nav(`/mypage?category=registered&page=${currentPage}`);
    }
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prevPage => {
        return prevPage + 1;
      });
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => {
        return prevPage - 1;
      });
      scrollToTop();
    }
  };

  const handlePageClick = (selectedPage: number) => {
    setCurrentPage(selectedPage-1);
  };

  return (
    <div className="flex items-center justify-center mb-[10rem] mt-[5rem] text-[22px]">
      <button onClick={handlePrevPage} className="mr-8 ">
        {"<"}
      </button>
      {pageNumbers.map((page, i) => (
        <button
          key={i}
          className={`mr-3 ml-3 text-[20px] ${
            page === currentPage + 1 ? "text-mainBlue font-bold" : ""
          }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage} className="ml-8 ">
        {">"}
      </button>
    </div>
  );
};

export default PageNation;
