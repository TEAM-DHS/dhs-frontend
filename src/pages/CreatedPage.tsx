import PlainNavBar from "../components/_common/PlainNavBar";
import SearchForm from "../components/CreatedPage/SearchForm";

const CreatedPage = () => {
  return (
    <>
      <PlainNavBar isToMy={true} />
      <SearchForm />
    </>
  );
};

export default CreatedPage;
