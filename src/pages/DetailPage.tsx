import { useParams } from "react-router-dom";
import CategoryNavBar from "../components/_common/CategoryNavBar";

const DetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <CategoryNavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a href={`/detail/${id}/register`}>신청하러 가기</a>
    </>
  );
};

export default DetailPage;
