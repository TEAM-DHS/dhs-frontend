import Question from "./Question";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

interface PlaceType {
  postalCode: string;
  setPostalCode: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Place = ({
  postalCode,
  setPostalCode,
  location,
  setLocation,
}: PlaceType) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleAddress = (data: any) => {
    setLocation(data.address);
    setPostalCode(data.zonecode);
    setPopupVisible(false);
  };

  return (
    <>
      <Question title="장소를 입력해주세요." />
      <input
        className="border flex w-[35%] shrink-0 py-3 flex-col rounded-3xl border-solid border-neutral-200 mt-6 pl-[1rem] pr-[1rem]"
        value={postalCode}
        placeholder="우편번호"
        disabled
      />
      <div className="flex gap-4 mt-6">
        <input
          className="border flex w-[75%] shrink-0 py-3 flex-col rounded-3xl border-solid border-neutral-200 pl-[1rem] pr-[1rem]"
          value={location}
          placeholder="주소"
          disabled
        />
        <button
          className="text-white leading-5 border bg-blue-700 items-center px-5 py-3 rounded-3xl border-solid border-blue-700 w-[25%]"
          onClick={() => setPopupVisible(true)}
        >
          검색
        </button>
        {popupVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-96 h-[575px] p-4 rounded-2xl shadow-md overflow-y-auto relative">
              <button
                onClick={() => setPopupVisible(false)}
                className="text-[28px] md:text-xl w-[42rem] ml-auto border-none cursor-pointer"
              >
                x
              </button>
              <DaumPostcode
                style={{
                  height: "500px",
                }}
                onComplete={handleAddress}
                autoClose
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Place;
