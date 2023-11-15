import Header from "../components/MyPage/Header";
import { registerData } from "../utils/data/registerData";
import EmptyMessage from "../components/MyPage/EmptyMessage";
import Table from "../components/RegisterList/Table";

const RegisterListPage = () => {
  return (
    <>
      <Header />
      {registerData ? <Table /> : <EmptyMessage message="신청자가 없습니다!" />}
    </>
  );
};

export default RegisterListPage;
