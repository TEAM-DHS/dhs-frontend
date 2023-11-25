import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProgramLiked } from "../../api/program";
import { getProgramCreated } from "../../api/program";
import { getProgramRegistered } from "../../api/program";

interface PageType {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  category: string;
  getData: () => Promise<void>;
  setData: React.Dispatch<React.SetStateAction<EventPreviewType[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PageNation = ({
  itemsPerPage,
  currentPage,
  totalPages,
  setCurrentPage,
  setData,
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

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prevPage => {
        return prevPage + 1;
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
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
            page === currentPage + 1 ? "text-mainBlue font-bold" : ""
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
