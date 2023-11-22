import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { myPageCategory } from "../../utils/data/myPageCategory";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../../services/store/auth";
import { postLogout } from "../../api/auth";

interface isCategoryProps {
  isCategory?: boolean;
}

const Header: React.FC<isCategoryProps> = ({ isCategory }) => {
  const nav = useNavigate();
  const location = useLocation();
  const isLogin = useRecoilValue<boolean>(isLoginState);

  const postLogOut = async () => {
    try {
      const confirmed = window.confirm("로그아웃 하시겠습니까?");
      if (confirmed) {
        const res = await postLogout();
        console.log(res);
        alert("로그아웃 되었습니다.");
        nav("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            onClick={() => nav("/created")}
          >
            행사 등록하기
          </div>
          <div
            className="font-regular text-smTitle cursor-pointer whitespace-nowrap"
            onClick={() => (isLogin ? postLogOut() : nav("/login"))}
          >
            {isLogin ? "로그아웃" : "로그인"}
          </div>
        </div>
      </div>
      {isCategory ? (
        <div className="w-[calc(100%-100px)] flex pt-[18px] pl-[12px] mb-[-2px]">
          {myPageCategory.map(item => (
            <div
              className={`w-auto flex justify-center ml-[10px] mr-[10px] pb-[10px] text-smTitle cursor-pointer whitespace-nowrap ${
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
      ) : (
        <div className="mr-auto ml-[62px] mt-[18px] mb-[9px] text-smTitle font-bold">
          신청자 목록
        </div>
      )}
    </div>
  );
};

export default Header;
