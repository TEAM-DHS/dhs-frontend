import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import "../../styles/navbar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { categoryData, categoryItemType } from "../../utils/data/filterData";
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryNavBarState } from "../../services/store/event";
import { isLoginState } from "../../services/store/auth";

const CategoryNavBar = () => {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = useRecoilValue<boolean>(isLoginState);

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    if (position === 0) setVisible(undefined);
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);
  useEffect(() => {
    setPosition(0);
    setVisible(undefined);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [category, setCategory] =
    useRecoilState<CategoryType>(categoryNavBarState);

  const onClick = (item: categoryItemType) => {
    setCategory(item.params);
    nav(item.path);
  };

  return (
    <div
      className={
        visible === false && position > 130
          ? "fade-out navbar"
          : visible === true && position > 130
          ? "fade-in navbar"
          : "navbar"
      }
    >
      <div className="w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex justify-between items-center gap-[36px] mobile:gap-0">
        <Logo
          width="150"
          className="flex-shrink-0 cursor-pointer"
          onClick={() => nav("/")}
        />
        <div className="h-[50px] flex gap-[36px] items-center mt-[10px] mobile:gap-[20px]">
          <div
            className="font-regular text-smTitle cursor-pointer whitespace-nowrap"
            onClick={() => nav("/created")}
          >
            행사 등록하기
          </div>
          <div
            className="font-regular text-smTitle cursor-pointer whitespace-nowrap"
            onClick={() => nav(isLogin ? "/mypage?category=heart" : "/login")}
          >
            {isLogin ? "마이페이지" : "로그인"}
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex mobile:pl-0 pt-[18px] pl-[12px] mb-[-2px]">
        {categoryData.map((item: categoryItemType) => (
          <div
            className={`w-[36px] flex justify-center mx-[8px] pb-[10px] text-smTitle cursor-pointer whitespace-nowrap ${
              (
                searchParams.get("category") === null &&
                window.location.pathname !== "/"
                  ? category === (item.id === 0 ? "" : item.params)
                  : searchParams.get("category") ===
                    (item.id === 0 ? null : item.params)
              )
                ? `font-bold border-b-[3px] border-mainBlue text-mainBlue`
                : `font-regular text-black`
            }`}
            onClick={() => onClick(item)}
            key={item.id}
          >
            {item.params === "" ? "홈" : item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavBar;
