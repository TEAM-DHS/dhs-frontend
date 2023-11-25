import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PageType {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PageNation = ({
  itemsPerPage,
  totalItems,
  currentPage,
  totalPages,
  setCurrentPage,
}: PageType) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const nav = useNavigate();

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
  );
};

export default PageNation;
