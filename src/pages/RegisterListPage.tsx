import Header from "../components/MyPage/Header";
import EmptyMessage from "../components/MyPage/EmptyMessage";
import { useParams } from "react-router-dom";
import Table from "../components/RegisterList/Table";
import { useEffect, useState } from "react";
import { getProgramRegistrators } from "../api/program";

const RegisterListPage = () => {
  const [data, setData] = useState<ListType[]>([]);
  const { programId } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getProgramRegistrators(Number(programId));
  //       setData(res);
  //       localStorage.setItem('amount',res.length)
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [programId]);

  return (
    <>
      <Header />
      {data ? (
        <Table data={data} />
      ) : (
        <EmptyMessage message="신청자가 없습니다!" />
      )}
    </>
  );
};

export default RegisterListPage;
