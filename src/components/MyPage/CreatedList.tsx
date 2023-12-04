import EventItem from "../_common/EventItem";
import EmptyMessage from "./EmptyMessage";
import { getProgramCreated } from "../../api/program";
import { useState, useEffect } from "react";
import PageNation from "./PageNation";
import { myCreatedData } from "../../utils/data/myPageData";

const CreatedList = () => {
  const [data, setData] = useState<EventPreviewType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(10);

  const itemsPerPage = 12;

  useEffect(() => {
    getCreatedData();
    setTotalItems(data.length);
  }, []);

  const getCreatedData = async () => {
    // try {
    //   const res = await getProgramCreated(currentPage);
    //   const d = res.programs;
    //   setData(d);
    //   setTotalPages(res.pageInfo.totalPages);
    // } catch (err) {
    //   console.log(err);
    // }
    setData(myCreatedData.programs);
    setTotalPages(myCreatedData.pageInfo.totalPages);
  };

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="w-[calc(100%-100px)] ml-auto mr-auto flex flex-wrap gap-[30px] mobile:w-[calc(100%-40px)] mt-[5%]">
            {data.map(item => (
              <EventItem {...item} key={item.programId} isRegist={true} />
            ))}
          </div>
          <PageNation
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={totalItems}
            setData={setData}
            category="created"
            getData={getCreatedData}
          />
        </>
      ) : (
        <EmptyMessage message="등록한 행사가 없어요!" />
      )}
    </>
  );
};

export default CreatedList;
