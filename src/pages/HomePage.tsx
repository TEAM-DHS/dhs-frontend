import CategoryNavBar from "../components/_common/CategoryNavBar";
import TopFive from "../components/HomePage/TopFive";
import SearchSection from "../components/HomePage/SearchSection";
import ListSection from "../components/HomePage/ListSection";

const HomePage = () => {
  return (
    <>
      <CategoryNavBar />
      <TopFive />
      <SearchSection />
      <ListSection />
    </>
  );
};

export default HomePage;
