const CreatedPage = () => {
  return (
    <div className="bg-white flex flex-col pr-1.5">
      <div className="self-center flex w-full max-w-[1149px] items-stretch justify-between gap-5 mt-3.5 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="flex items-stretch justify-between gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02549e31-a143-4ecb-9d27-d50a9cd9a546?"
            className="aspect-[0.97] object-contain object-center w-14 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black text-3xl leading-9 grow whitespace-nowrap mt-5 self-start">
            대행사
          </div>
        </div>
        <div className="text-black text-lg leading-6 my-auto">마이페이지</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/658c74fa-8804-4022-9310-d73ec5baf105?"
        className="aspect-[1275] object-contain object-center w-full stroke-[1px] stroke-neutral-200 overflow-hidden self-stretch mt-6 max-md:max-w-full"
      />
      <div className="self-center flex w-[506px] max-w-full items-stretch gap-5 mt-14 px-5 max-md:flex-wrap max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c2b2fb6-d95e-4c66-a09d-4485ad4d3608?"
          className="aspect-square object-contain object-center w-24 justify-center items-center overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-black text-2xl leading-9 self-center grow shrink basis-auto my-auto">
          행사 등록을 위해서는 <br />
          관련된 정보들이 필요해요!
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd1cd74d-1e08-48d3-9a75-64673c1d8ee1?"
        className="aspect-[506] object-contain object-center w-[506px] stroke-[1px] stroke-neutral-200 overflow-hidden self-center max-w-full mt-12 max-md:mt-10"
      />
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[544px] mt-12 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">어떤 행사를 계획 중이신가요? </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="self-center flex w-[506px] max-w-full items-stretch gap-2.5 mt-5 pr-2.5 max-md:flex-wrap max-md:justify-center">
        <div className="text-black text-base leading-5 whitespace-nowrap border grow items-center px-5 py-3.5 rounded-3xl border-solid border-neutral-200">
          공연
        </div>
        <div className="text-black text-base leading-5 whitespace-nowrap border grow items-center px-5 py-3.5 rounded-3xl border-solid border-neutral-200">
          전시
        </div>
        <div className="text-black text-base leading-5 whitespace-nowrap border grow items-center px-5 py-3.5 rounded-3xl border-solid border-neutral-200">
          주점
        </div>
        <div className="text-black text-base leading-5 whitespace-nowrap border grow items-center px-5 py-3.5 rounded-3xl border-solid border-neutral-200">
          학술
        </div>
        <div className="text-black text-base leading-5 whitespace-nowrap border grow items-center px-5 py-3.5 rounded-3xl border-solid border-neutral-200">
          기타
        </div>
      </div>
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[542px] mt-14 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">행사의 제목을 입력해주세요. </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="border self-center flex w-[506px] shrink-0 h-[41px] flex-col mt-8 rounded-lg border-solid border-neutral-200 max-md:max-w-full" />
      <div className="text-neutral-500 text-right text-xs leading-4 max-w-[543px] mr-96 mt-3.5 self-end max-md:mr-2.5">
        0/30
      </div>
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[542px] mt-14 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">행사에 대해 자세히 소개해주세요. </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="border self-center flex w-[506px] shrink-0 h-[100px] flex-col mt-8 rounded-lg border-solid border-neutral-200 max-md:max-w-full" />
      <div className="text-neutral-500 text-right text-xs leading-4 max-w-[543px] mr-96 mt-4 self-end max-md:mr-2.5">
        0/500
      </div>
      <div className="self-center flex w-[506px] max-w-full items-center justify-between gap-5 mt-16 px-5 max-md:flex-wrap max-md:mt-10">
        <div className="text-blue-700 text-2xl leading-7 grow shrink basis-auto my-auto">
          <span className=" text-black">썸네일 사진을 첨부해주세요. </span>
          <span className="font-bold text-blue-700">*</span>
        </div>
        <div className="text-white text-base leading-5 whitespace-nowrap border bg-blue-700 self-stretch grow items-center px-5 py-3.5 rounded-3xl border-solid border-blue-700">
          업로드
        </div>
      </div>
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[539px] mt-12 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">
          행사와 관련된 사진들을 첨부해주세요.{" "}
        </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
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
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[542px] mt-14 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">팀 이름을 입력해주세요. </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="border self-center flex w-[506px] shrink-0 h-[41px] flex-col mt-8 rounded-lg border-solid border-neutral-200 max-md:max-w-full" />
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[542px] mt-14 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">우리 팀에 대해 소개해주세요. </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="border self-center flex w-[506px] shrink-0 h-[100px] flex-col mt-8 rounded-lg border-solid border-neutral-200 max-md:max-w-full" />
      <div className="text-neutral-500 text-right text-xs leading-4 max-w-[543px] mr-96 mt-4 self-end max-md:mr-2.5">
        0/50
      </div>
      <div className="self-center flex w-[506px] max-w-full items-center justify-between gap-5 mt-16 px-5 max-md:flex-wrap max-md:mt-10">
        <div className="text-blue-700 text-2xl leading-7 grow shrink basis-auto my-auto">
          <span className=" text-black">목표 인원을 입력해주세요. </span>
          <span className="font-bold text-blue-700">*</span>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-3">
          <div className="text-neutral-500 text-base leading-5 border grow items-center px-5 py-4 rounded-3xl border-solid border-neutral-200">
            0
          </div>
          <div className="text-black text-base leading-5 self-center grow whitespace-nowrap my-auto">
            명
          </div>
        </div>
      </div>
      <div className="self-center flex w-[506px] max-w-full justify-between gap-5 mt-12 px-5 max-md:flex-wrap max-md:mt-10">
        <div className="text-blue-700 text-2xl leading-7 grow shrink basis-auto mt-1.5">
          <span className=" text-black">가격을 입력해주세요. </span>
          <span className="font-bold text-blue-700">*</span>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-3.5">
          <div className="text-neutral-500 text-base leading-5 whitespace-nowrap border grow items-center px-5 py-4 rounded-3xl border-solid border-neutral-200">
            0
          </div>
          <div className="text-black text-base leading-5 self-center grow whitespace-nowrap my-auto">
            원
          </div>
        </div>
      </div>
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[539px] mt-12 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">
          예금주, 은행명, 계좌번호를 입력해주세요.{" "}
        </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="self-center flex w-[506px] max-w-full items-stretch gap-3 mt-5 px-5 max-md:flex-wrap max-md:justify-center">
        <div className="text-neutral-500 text-base leading-5 whitespace-nowrap border grow items-center px-5 py-3.5 rounded-3xl border-solid border-neutral-200">
          예금주
        </div>
        <div className="text-neutral-500 text-base leading-5 whitespace-nowrap border grow items-center px-5 py-3.5 rounded-3xl border-solid border-neutral-200">
          은행명
        </div>
        <div className="text-neutral-500 text-base leading-5 whitespace-nowrap border grow items-center px-5 py-3.5 rounded-3xl border-solid border-neutral-200">
          계좌번호
        </div>
      </div>
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[539px] mt-12 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">신청 마감 날짜를 선택해주세요. </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="text-black text-base leading-5 border self-center w-[506px] max-w-full items-center mt-5 px-5 py-4 rounded-3xl border-solid border-neutral-200">
        --:--:--
      </div>
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[539px] mt-12 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">장소를 입력해주세요. </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="self-center flex w-[506px] max-w-full items-stretch gap-4 mt-5 max-md:flex-wrap">
        <div className="border flex w-[390px] shrink-0 h-[41px] flex-col rounded-3xl border-solid border-neutral-200" />
        <div className="text-white text-base leading-5 whitespace-nowrap border bg-blue-700 items-center px-5 py-3.5 rounded-3xl border-solid border-blue-700">
          검색
        </div>
      </div>
      <div className="text-blue-700 text-2xl leading-7 self-center max-w-[542px] mt-14 max-md:max-w-full max-md:mt-10">
        <span className=" text-black">개인정보 수집 동의서 </span>
        <span className="font-bold text-blue-700">*</span>
      </div>
      <div className="self-center flex ml-0 w-[291px] max-w-full items-stretch gap-2.5 mt-8 px-5">
        <div className="border flex w-[22px] shrink-0 h-[22px] flex-col rounded-md border-solid border-neutral-200" />
        <div className="text-black text-xs leading-4 self-center grow whitespace-nowrap my-auto">
          정보 입력 후 수정이 불가합니다. (공지사항 등록은 가능)
        </div>
      </div>
      <div className="text-white text-lg font-bold leading-6 whitespace-nowrap items-center bg-blue-700 self-center w-[506px] max-w-full mt-24 mb-36 px-5 py-7 rounded-xl max-md:my-10">
        등록하기
      </div>
    </div>
  );
};

export default CreatedPage;
