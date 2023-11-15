import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import NavBar from "../components/_common/NavBar";
import ListSection from "../components/ListPage/ListSection";

import { useRecoilState, useResetRecoilState } from "recoil";
import { filterState } from "../services/store/event";

const ListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useRecoilState(filterState);
  const resetFilter = useResetRecoilState(filterState);
  useEffect(() => {
    resetFilter();
  }, []);
  useEffect(() => {
    setFilter(prev => ({
      ...prev,
      category: String(searchParams.get("category")),
    }));
  }, [searchParams]);
  return (
    <>
      <NavBar />
      <ListSection />
    </>
  );
};

export default ListPage;
