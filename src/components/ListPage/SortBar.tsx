import { sortData } from "../../utils/data/filterData";
import { useRecoilState } from "recoil";
import { filterState } from "../../services/store/event";

const SortBar = () => {
  const [filter, setFilter] = useRecoilState<EventFilterType>(filterState);
  const className = (thisText: string) =>
    `text-p cursor-pointer whitespace-nowrap ${
      filter.sort === thisText
        ? "font-bold text-slateBlack"
        : "font-regular text-darkGray"
    }`;
  const barClassName =
    "font-regular text-p text-darkGray mx-[5px] cursor-default";
  return (
    <div className="flex items-center">
      {sortData.map(item => (
        <div className="flex items-center" key={item.id}>
          {item.id !== 0 && <div className={barClassName}>|</div>}
          <div
            className={className(item.params)}
            onClick={() => setFilter(prev => ({ ...prev, sort: item.params }))}
          >
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortBar;
