import Header from "../components/MyPage/Header";
import { useLocation } from "react-router-dom";
import CreatedList from "../components/MyPage/CreatedList";
import LikedList from "../components/MyPage/LikedList";
import RegisteredList from "../components/MyPage/RegisteredList";
import { useEffect } from "react";

const MyPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");
  // url에서 카테고리 종류 읽어오기 heart, created, registered

  return (
    <>
      <Header isCategory={true} />
      {category === "heart" ? (
        <LikedList />
      ) : category === "created" ? (
        <CreatedList />
      ) : (
        <RegisteredList />
      )}
    </>
  );
};

export default MyPage;
