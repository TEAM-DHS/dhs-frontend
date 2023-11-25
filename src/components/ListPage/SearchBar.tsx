import { useState, useRef } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as XIcon } from "../../assets/xbtn.svg";
import SortBar from "./SortBar";
import { useRecoilState } from "recoil";
import { filterState } from "../../services/store/event";

type Props = { isFlexWithSort?: boolean; isListPage?: boolean };
const SearchBar = ({ isFlexWithSort, isListPage }: Props) => {
  const [input, setInput] = useState<string>("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    event.target && setInput(event.target.value);

  const inputRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useRecoilState<EventFilterType>(filterState);
  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === "") alert("검색어를 입력해주세요.");
    else {
      if (inputRef.current) inputRef.current.blur();
      setFilter(prev => ({ ...prev, keyword: input }));
    }
  };
  const onClear = () => {
    setInput("");
    setFilter(prev => ({ ...prev, keyword: "" }));
  };

  return (
    <div className="flex gap-[3%] mobile:w-full mobile:flex-col mobile:items-end mobile:gap-[20px]">
      <form
        onSubmit={onSubmit}
        className={`${
          isListPage ? "w-[50vw]" : "w-[calc(45vw-100px)]"
        } mobile:w-[100%] flex justify-between items-center px-[20px] py-[12px] rounded-full border-[1px] border-lightGray`}
      >
        <input
          value={input}
          onChange={onChange}
          placeholder="키워드를 검색하세요"
          ref={inputRef}
          className={`${
            input === "" ? "w-[calc(100%-30px)]" : "w-[calc(100%-60px)]"
          } font-regular text-p placeholder:text-darkGray text-slateBlack outline-none border-none`}
        />
        <div
          className={`${
            input === "" ? "w-[20px]" : "w-[50px]"
          } h-[20px] flex justify-end items-center gap-[8px]`}
        >
          {input !== "" && (
            <XIcon className="cursor-pointer" onClick={onClear} />
          )}
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      {isFlexWithSort && <SortBar />}
    </div>
  );
};

export default SearchBar;
