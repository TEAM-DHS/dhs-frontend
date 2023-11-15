import kakaoLogin from "../../assets/Login/kakaoLogin.png";
import line from "../../assets/Login/line.png";
import TextInput from "./IdInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import Navigate from "./Navigate";

const LoginSection = () => {
  return (
    <div>
      <img src={kakaoLogin} className="w-[386px] cursor-pointer" />
      <img src={line} className="w-[386px] mt-[40px] mb-[20px]" />
      <TextInput />
      <PasswordInput />
      <Button text="로그인하기" />
      <Navigate
        message="아직 계정이 없으신가요?"
        route="회원가입"
        url="/signup"
      />
    </div>
  );
};

export default LoginSection;
