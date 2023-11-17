import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

type Props = { isToMy?: boolean };
const PlainNavBar = ({ isToMy }: Props) => {
  const nav = useNavigate();
  return (
    <>
      {isToMy ? (
        <div className="bg-white flex flex-col items-center pt-[11px] border-b-[1px] border-lightGray">
          <div className="w-[calc(100%-100px)] flex justify-between items-center gap-[36px] pb-[20px]">
            <Logo
              width="150"
              className="flex-shrink-0 cursor-pointer"
              onClick={() => nav("/")}
            />
            <div className="h-[0px] flex items-center mt-[10px]">
              <div
                className="font-regular text-smTitle cursor-pointer whitespace-nowrap"
                onClick={() => nav("/mypage?category=heart")}
              >
                마이페이지
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Logo
          width="150"
          className="flex-shrink-0 cursor-pointer ml-[50px] mt-[10px]"
          onClick={() => nav("/")}
        />
      )}
    </>
  );
};

export default PlainNavBar;
