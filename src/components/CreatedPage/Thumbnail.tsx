import Question from "./Question";
import { useState } from "react";

const Thumbnail = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0]; // null이 아닌 경우에만 접근
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

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
          />
        </label>
      </div>
      {image && (
        <div className="text-neutral-500 text-right text-xs leading-4 mt-3.5 self-end">
          이미지가 성공적으로 업로드되었습니다.
        </div>
      )}
    </>
  );
};

export default Thumbnail;
