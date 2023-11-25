import React, { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Question from "./Question";

interface Photos {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const Photos: React.FC<Photos> = ({ images, setImages }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openFilePicker = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = event.target.files;
    if (selectedImages) {
      const newImages = Array.from(selectedImages);
      setImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <>
      <Question title="행사와 관련된 사진들을 첨부해주세요." />
      {images.length === 0 ? (
        <div className="border self-center flex w-[506px] max-w-full flex-col items-center mt-5 pt-9 pb-11 px-5 rounded-lg border-dashed border-neutral-200">
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            multiple
          />
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
              <button className="text-blue-700" onClick={openFilePicker}>
                여기를 클릭하세요.
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex mt-6">
            {images.map((image, index) => (
              <div key={index} className="flex mr-2">
                <button
                  onClick={() => removeImage(index)}
                  className="bg-white absolute rounded-[100%] pt-[1px] pb-[2px] pr-[10px] pl-[10px] mt-1 ml-1"
                >
                  x
                </button>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`uploaded-${index}`}
                  className="w-[150px] h-[150px] rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Photos;
