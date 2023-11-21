import IdInput from "../LoginPage/IdInput";
import PasswordInput from "../LoginPage/PasswordInput";
import Button from "../LoginPage/Button";
import Navigate from "../LoginPage/Navigate";
import kakaoSignUp from "../../assets/Login/kakaoSignUp.png";
import line2 from "../../assets/Login/line2.png";
import message from "../../assets/Login/message.png";
import PasswordReInput from "./PasswordReInput";
import { useState } from "react";

const SignUpSection = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isValidId, setIsValidId] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidRePassword, setIsValidRePassword] = useState(false);

  return (
    <div>
      <img src={message} className="w-[142px] absolute ml-[120px] mt-[-40px]" />
      <img src={kakaoSignUp} className="w-[386px] cursor-pointer" />
      <img src={line2} className="w-[386px] mt-[40px] mb-[20px]" />
      <IdInput id={id} setId={setId} setIsValidId={setIsValidId} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        setIsValidPassword={setIsValidPassword}
      />
      <PasswordReInput
        rePassword={rePassword}
        setRePassword={setRePassword}
        setIsValidRePassword={setIsValidRePassword}
        password={password}
      />
      <Button
        text="가입하기"
        isValid={isValidId && isValidPassword && isValidRePassword}
      />
      <Navigate
        message=" 이미 계정이 있으신가요?"
        route="로그인"
        url="/login"
      />
    </div>
  );
};

export default SignUpSection;
