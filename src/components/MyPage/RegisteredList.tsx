import EventItem from "../_common/EventItem";
import EmptyMessage from "./EmptyMessage";
import { useState, useEffect } from "react";
import { getProgramRegistered } from "../../api/program";
import PageNation from "./PageNation";
import { myRegisteredData } from "../../utils/data/myPageData";

const RegisteredList = () => {
  const [data, setData] = useState<EventPreviewType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(10);

  const itemsPerPage = 12;

  useEffect(() => {
    getRegisteredData();
    setTotalItems(data.length);
  }, []);

  const getRegisteredData = async () => {
    // try {
    //   const res = await getProgramRegistered(currentPage);
    //   const d = res.programs;
    //   setData(d);
    //   setTotalPages(res.pageInfo.totalPages);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
    setData(myRegisteredData.programs);
    setTotalPages(myRegisteredData.pageInfo.totalPages);
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
            category="register"
            getData={getRegisteredData}
          />
        </>
      ) : (
        <EmptyMessage message="신청한 행사가 없어요!" />
      )}
    </>
  );
};

export default RegisteredList;
