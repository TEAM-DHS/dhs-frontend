import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../../assets/Detail/arrow.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";
import CategoryBlock from "../_common/CategoryBlock";
import Modal from "../_common/Modal";
import NoticeModal from "./NoticeModal";
import useHeart from "../../utils/hooks/useHeart";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/swiper.css";

interface Props extends EventDetailType {
  trigger: number;
  setTrigger: (value: number) => void;
}
const InfoSection = ({ program, member, trigger, setTrigger }: Props) => {
  const nav = useNavigate();
  const {
    programId,
    title,
    category,
    contentImages,
    goal,
    remainingDays,
    schedule,
    deadline,
    price,
    location,
    likeNumber,
    isOpen,
  } = program;
  const { isHost, hasRegistration, hasLike } = member;
  const { state, toggle, likedNum } = useHeart(programId, hasLike, likeNumber);
  console.log(likeNumber);

  const [noticeModal, setNoticeModal] = useState<boolean>(false);

  const [swiper, setSwiper] = useState<SwiperClass>();
  const swiperController = (to: number | "prev" | "next") =>
    !!swiper &&
    (typeof to === "number"
      ? swiper.slideTo(to)
      : to === "next"
      ? swiper.slideNext()
      : to === "prev"
      ? swiper.slidePrev()
      : null);

  const subtitleClassName = "font-regular text-black text-smTitle";

  return (
    <>
      <div className="w-[1160px] laptop:w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex flex-col items-center">
        <div className="flex flex-col items-center mobile:hidden">
          <CategoryBlock text={category} />
          <div className="font-bold text-lgTitle text-center mt-[20px]">
            {title}
          </div>
        </div>
        <div className="w-full flex justify-center mt-[70px] gap-[12%] laptop:gap-[10%] mobile:flex-col mobile:mt-0">
          <div className="flex flex-col items-center gap-[25px]">
            <div className="flex items-center gap-[30px]">
              <ArrowIcon
                style={{ transform: "rotate(180deg)" }}
                cursor="pointer"
                onClick={() => swiperController("prev")}
              />
              <Swiper
                style={{ width: "300px", height: "450px" }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
                onSwiper={(swiper: SwiperClass) => setSwiper(swiper)}
                className=""
              >
                {contentImages.map(item => (
                  <SwiperSlide key={item.id}>
                    <img src={item.url} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <ArrowIcon
                cursor="pointer"
                onClick={() => swiperController("next")}
              />
            </div>
            <div className="flex gap-[10px]">
              {contentImages.map((item, idx) => (
                <div
                  className="w-[50px] h-[50px] rounded-[8px] overflow-hidden cursor-pointer"
                  onClick={() => swiperController(idx)}
                  key={item.id}
                >
                  <img src={item.url} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden flex-col items-center mt-[20px] mobile:flex">
            <CategoryBlock text={category} />
            <div className="font-bold text-lgTitle text-center leading-tight my-[20px]">
              {title}
            </div>
          </div>
          <div className="w-[40%] max-w-[510px] mobile:w-full mobile:max-w-full flex flex-col justify-between pt-[4px]">
            <div className="flex flex-col">
              <div className={subtitleClassName}>신청 인원</div>
              <div className="h-[40px] flex items-end mt-[16px]">
                <div className="font-regular text-lgTitle">
                  {goal.targetNumber}
                </div>
                <div className="font-regular text-smTitle mb-[10px]">명</div>
                <div className="font-bold text-[20px] mb-[8px] ml-[8px]">
                  {goal.progressRate + "%"}
                </div>
              </div>
              <div className={subtitleClassName + " mt-[20px]"}>행사 일정</div>
              <div className="font-regular text-lgTitle">
                {new Date(schedule).toLocaleString("ko", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </div>
            </div>
            <div className="w-full border-b-[1px] border-lightGray my-[25px]" />
            <div className="grid grid-cols-[100px_1fr] gap-y-[20px] pb-[20px]">
              <div className={subtitleClassName}>목표 인원</div>
              <div className={subtitleClassName + " text-darkGray"}>
                {goal.targetNumber + "명"}
              </div>
              <div className={subtitleClassName}>신청 기간</div>
              <div
                className={
                  subtitleClassName +
                  " text-darkGray flex items-center gap-[8px] flex-wrap"
                }
              >
                {"~ " +
                  new Date(deadline).toLocaleString("ko", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                <div className="text-mainBlue text-[10px] py-[4px] px-[12px] bg-whiteBlue border-[1px] border-lightBlue rounded-[5px] flex-shrink-0">
                  {remainingDays + "일 남음"}
                </div>
              </div>
              <div className={subtitleClassName}>가격</div>
              <div className={subtitleClassName + " text-darkGray"}>
                {price.includes("원")
                  ? price
                  : `${Number(price).toLocaleString()}원`}
              </div>
              <div className={subtitleClassName}>장소</div>
              <div className={subtitleClassName + " text-darkGray"}>
                {location}
              </div>
            </div>
            <div className="w-full flex gap-[16px]">
              <div
                className="w-[70px] h-[70px] rounded-[5px] flex flex-shrink-0 flex-col justify-center items-center border-[1px] border-lightGray cursor-pointer"
                onClick={toggle}
              >
                <HeartIcon
                  stroke={state ? "transparent" : "#B1CCFF"}
                  fill={state ? "#185ADB" : "#ffffff"}
                />
                <div className="font-regular text-sm">{likedNum}</div>
              </div>
              <div
                className={`w-[calc(100%-86px)] h-[70px] rounded-[12px] flex justify-center items-center ${
                  (!isHost && hasRegistration) || !isOpen
                    ? "bg-darkGray"
                    : "bg-mainBlue"
                } font-bold text-smTitle text-white${
                  hasRegistration || !isOpen ? "" : " cursor-pointer"
                } `}
                onClick={() =>
                  isHost && isOpen
                    ? setNoticeModal(true)
                    : hasRegistration || !isOpen
                    ? null
                    : nav(`/detail/${programId}/register`)
                }
              >
                {!isOpen
                  ? "마감된 행사입니다"
                  : isHost
                  ? "공지 등록하기"
                  : hasRegistration
                  ? "참가 신청 완료"
                  : "참가 신청하기"}
              </div>
            </div>
          </div>
        </div>
      </div>
      {noticeModal && (
        <Modal isOpen={noticeModal} closer={() => setNoticeModal(false)}>
          <NoticeModal
            closer={() => setNoticeModal(false)}
            id={programId}
            trigger={trigger}
            setTrigger={setTrigger}
          />
        </Modal>
      )}
    </>
  );
};

export default InfoSection;
