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
import { postProgram } from "../../api/program";

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
  const [agree, setAgree] = useState(false);

  // console.log(title);
  // console.log(content);
  // console.log(schedule);
  // console.log(deadline);
  // console.log(targetNumber);
  // console.log(price);
  // console.log(hostDescription);
  // console.log(hostName);
  // console.log(images);
  // console.log(depositAccount);
  // console.log(depositBank);
  // console.log(depositName);
  // console.log(category);
  // console.log(location);
  // console.log(postalCode);

  const postProgramInfo = () => {
    const res = postProgram({
      title: title,
      category: category,
      schedule: schedule,
      location: location,
      postalCode: postalCode,
      deadline: deadline,
      targetNumber: targetNumber,
      content: content,
      depositAccount: depositAccount,
      depositBank: depositBank,
      depositName: depositName,
      price: price,
      hostName: hostName,
      hostDescription: hostDescription,
      images: images,
    });

    console.log(res);
  };

  return (
    <div className="bg-white flex flex-col w-[506px] mr-auto ml-auto">
      <Introduction />
      <Category category={category} setCategory={setCategory} />
      <EventDate schedule={schedule} setSchedule={setSchedule} />
      <EventTitle title={title} setTitle={setTitle} />
      <Description content={content} setContent={setContent} />
      <Thumbnail images={images} setImages={setImages} />
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
      <button
        className="text-white text-smTitle font-regular leading-6 bg-blue-700 w-[100%] mt-24 mb-36 px-5 py-7 rounded-xl text-center"
        onClick={postProgramInfo}
      >
        등록하기
      </button>
    </div>
  );
};

export default SearchForm;
