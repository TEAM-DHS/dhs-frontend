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
import EventDate from "./EventDate";
import { useState } from "react";

const SearchForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [schedule, setSchedule] = useState("");
  const [location, setLocation] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [deadline, setDeadline] = useState("");
  const [targetNumber, setTargetNumber] = useState(0);
  const [content, setContent] = useState("");
  const [depositAccount, setDepositAccount] = useState("");
  const [depositBank, setDepositBank] = useState("");
  const [depositName, setDepositName] = useState("");
  const [price, setPrice] = useState(0);
  const [hostName, setHostName] = useState("");
  const [hostDescription, setHostDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);

  // // 썸네일 없음, 개인정보 동의
  // console.log(title);
  // console.log(content);
  // console.log(schedule);
  // console.log(deadline);
  // console.log(targetNumber);
  // console.log(price);
  // console.log(hostDescription);
  // console.log(hostName);
  console.log(images)

  return (
    <div className="bg-white flex flex-col w-[506px] mr-auto ml-auto">
      <Introduction />
      {/* 보완 */}
      <Category category={category} setCategory={setCategory} />
      <EventDate schedule={schedule} setSchedule={setSchedule} />
      <EventTitle title={title} setTitle={setTitle} />
      <Description content={content} setContent={setContent} />
      <Thumbnail />
      {/* 보완 */}
      <Photos images={images} setImages={setImages} />
      <TeamName hostName={hostName} setHostName={setHostName} />
      <TeamIntro
        hostDescription={hostDescription}
        setHostDescription={setHostDescription}
      />
      <People targetNumber={targetNumber} setTargetNumber={setTargetNumber} />
      <Price price={price} setPrice={setPrice} />
      <Bank
        depositAccount={depositAccount}
        setDepositAccount={setDepositAccount}
        depositBank={depositBank}
        setDepositBank={setDepositBank}
        depositName={depositName}
        setDepositName={setDepositName}
      />
      <EndDate deadline={deadline} setDeadline={setDeadline} />
      <Place
        location={location}
        setLocation={setLocation}
        postalCode={postalCode}
        setPostalCode={setPostalCode}
      />
      <PersonalInfo />
      <button className="text-white text-smTitle font-regular leading-6 bg-blue-700 w-[100%] mt-24 mb-36 px-5 py-7 rounded-xl text-center">
        등록하기
      </button>
    </div>
  );
};

export default SearchForm;
