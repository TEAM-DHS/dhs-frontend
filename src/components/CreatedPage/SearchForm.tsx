import Introduction from "./Introduction";
import Category from "./Category";
import EventTitle from "./EventTitle";
import Description from "./Description";
import Thumbnail from "./Thumbnail";
import Photos from "./Photos";
import TeamName from "./TeamName";
import TeamIntro from "./TeamIntro";
import People from "./People";
import Price from "./Price";
import Bank from "./Bank";
import EndDate from "./EndDate";
import Place from "./Place";
import PersonalInfo from "./PersonalInfo";

const SearchForm = () => {
  return (
    <div className="bg-white flex flex-col w-[506px] mr-auto ml-auto">
      <Introduction />
      {/* 보완 */}
      <Category />
      <EventTitle />
      <Description />
      <Thumbnail />
      {/* 보완 */}
      <Photos />
      <TeamName />
      <TeamIntro />
      <People />
      <Price />
      <Bank />
      <EndDate />
      <Place />
      <PersonalInfo />
      <button className="text-white text-smTitle font-regular leading-6 bg-blue-700 w-[100%] mt-24 mb-36 px-5 py-7 rounded-xl text-center">
        등록하기
      </button>
    </div>
  );
};

export default SearchForm;
