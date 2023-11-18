const Introduction = () => {
  return (
    <>
      <div className="flex gap-5 mt-14 mr-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c2b2fb6-d95e-4c66-a09d-4485ad4d3608?"
          className="aspect-square object-contain object-center w-24  overflow-hidden shrink-0"
        />
        <div className="text-2xl leading-9 self-center font-regular">
          행사 등록을 위해서는 <br />
          관련된 정보들이 필요해요!
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-lightGray mt-[50px]"></div>
    </>
  );
};

export default Introduction;
