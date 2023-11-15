import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import CategoryNavBar from "../components/_common/CategoryNavBar";
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
      <CategoryNavBar />
      <ListSection />
    </>
  );
};

export default ListPage;
