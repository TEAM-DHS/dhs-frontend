import { useRef } from "react";
import Question from "./Question";

const Thumbnail = ({ images, setImages }: Photos) => {
  const handleImageUpload = () => {
    if (imgRef.current && imgRef.current.files) {
      const file = imgRef.current.files[0];
      setImages([file]);
    }
  };

  const imgRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div className="flex items-center justify-between">
        <Question title="썸네일 사진을 첨부해주세요." />
        <label className="text-white text-base leading-5 whitespace-nowrap border bg-blue-700 items-center px-10 py-3 rounded-3xl border-solid mt-[50px] cursor-pointer">
          업로드
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
            ref={imgRef}
          />
        </label>
      </div>
      {images[0] && (
        <div className="text-neutral-500 text-right text-xs leading-4 mt-3.5 self-end">
          이미지가 성공적으로 업로드되었습니다.
        </div>
      )}
    </>
  );
};

export default Thumbnail;
