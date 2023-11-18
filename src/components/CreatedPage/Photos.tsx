import Question from "./Question";

const Photos = () => {
  return (
    <>
      <Question title=" 행사와 관련된 사진들을 첨부해주세요." />
      <div className="border self-center flex w-[506px] max-w-full flex-col items-center mt-5 pt-9 pb-11 px-5 rounded-lg border-dashed border-neutral-200">
        <div className="flex w-[158px] max-w-full flex-col items-stretch">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f595eb41-3407-454e-9c95-69d4c36dc756?"
            className="aspect-[1.13] object-contain object-center w-[34px] justify-center items-center overflow-hidden self-center max-w-full"
          />
          <div className="text-black text-xs leading-4 whitespace-nowrap mt-5">
            업로드할 이미지를 드래그 해주세요.
          </div>
          <div className="text-blue-700 text-xs leading-4 self-center whitespace-nowrap mt-2">
            <span className="text-black">혹은 </span>
            <span className="text-blue-700">여기를 클릭하세요.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
