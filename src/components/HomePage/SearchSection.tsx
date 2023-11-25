import CategoryBar from "../ListPage/CategoryBar";
import SearchBar from "../ListPage/SearchBar";

const SearchSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[calc(100%-100px)] flex justify-between items-center py-[50px] gap-[2%] mobile:w-[calc(100%-40px)] mobile:flex-col mobile:items-start mobile:gap-[20px]">
        <CategoryBar />
        <SearchBar isFlexWithSort={true} />
      </div>
    </div>
  );
};

export default SearchSection;
