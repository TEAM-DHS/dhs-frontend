import Header from "../components/MyPage/Header";
import { registerData } from "../utils/data/registerData";
import EmptyMessage from "../components/MyPage/EmptyMessage";
import { useParams } from "react-router-dom";
import Table from "../components/RegisterList/Table";
import { useEffect, useState } from "react";
import { getProgramRegistered } from "../api/program";

interface ListType {
  name: string;
  phone: string;
  payment: {
    check: boolean;
    name: string;
    date: string;
    price: string;
  };
  refund: {
    status: string;
    bank: string;
    account: string;
    name: string;
  };
}

const RegisterListPage = () => {
  const [data, setData] = useState<ListType[]>([]);
  const { programId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProgramRegistered(Number(programId));
        console.log(res);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [programId]);

  return (
    <>
      <Header />
      {data ? <Table /> : <EmptyMessage message="신청자가 없습니다!" />}
    </>
  );
};

export default RegisterListPage;
