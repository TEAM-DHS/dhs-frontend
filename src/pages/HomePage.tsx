import NavBar from "../components/_common/NavBar";
import TopFive from "../components/HomePage/TopFive";
import SearchSection from "../components/HomePage/SearchSection";
import ListSection from "../components/HomePage/ListSection";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <TopFive />
      <SearchSection />
      <ListSection />
    </>
  );
};

export default HomePage;
