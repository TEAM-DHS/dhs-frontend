import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

function AddressSearch({}) {
  const [popupVisible, setPopupVisible] = useState(false);

  //   const handleAddress = data => {
  //     setPlaceAddress(data.address);
  //     setPopupVisible(false);
  //   };

  return (
    <div className="flex items-center flex-wrap">
      <input
        type="text"
        id="sample5_address"
        placeholder="처음 만날 장소를 검색해 주세요!"
        // value={placeAddress}
        readOnly
        className="w-64 h-12 font-medium text-lg text-center rounded-full border border-gray-300 outline-none my-2 md:w-full md:mr-2 md:my-0"
      />
      <button
        type="button"
        onClick={() => setPopupVisible(true)}
        className="w-24 h-12 bg-gray-100 text-black font-medium rounded-full border border-gray-300 outline-none ml-2 my-2 md:w-full md:ml-0 md:mt-2"
      >
        주소 검색
      </button>
      <br />
      {popupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 md:w-72 h-96 md:h-80 p-4 rounded-2xl shadow-md overflow-y-auto">
            <div className="flex justify-between items-center">
              <p className="text-xl md:text-lg">
                주소를 검색하고 선택해주세요.
              </p>
              <button
                onClick={() => setPopupVisible(false)}
                className="text-3xl md:text-2xl border-none bg-white cursor-pointer"
              >
                x
              </button>
            </div>
            {/* <DaumPostcode
              style={{
                height: "510px",
              }}
              onComplete={handleAddress}
              autoClose
            /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddressSearch;
