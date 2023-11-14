import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { categoryData } from "../../utils/data/categoryData";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../../services/store/auth";

const NavBar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const isLogin = useRecoilValue<boolean>(isLoginState);
  return (
    <div className="bg-white flex flex-col items-center pt-[10px] border-b-[1px] border-lightGray">
      <div className="w-[calc(100%-100px)] flex justify-between items-center gap-[36px]">
        <Logo
          width="150"
          className="flex-shrink-0 cursor-pointer"
          onClick={() => nav("/")}
        />
        <div className="h-[50px] flex gap-[36px] items-center mt-[10px]">
          <div
            className="font-regular text-smTitle cursor-pointer whitespace-nowrap"
            onClick={() => nav("/")}
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
      <div className="w-[calc(100%-100px)] flex pt-[18px] pl-[12px] mb-[-2px]">
        {categoryData.map(item => (
          <div
            className={`w-[36px] flex justify-center mx-[8px] pb-[10px] text-smTitle cursor-pointer whitespace-nowrap ${
              `${location.pathname}${location.search}` === item.path
                ? `font-bold border-b-[3px] border-mainBlue text-mainBlue`
                : `font-regular text-black`
            }`}
            onClick={() => nav(item.path)}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
