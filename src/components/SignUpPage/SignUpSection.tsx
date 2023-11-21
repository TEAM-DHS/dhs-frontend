import IdInput from "../LoginPage/IdInput";
import PasswordInput from "../LoginPage/PasswordInput";
import Button from "../LoginPage/Button";
import Navigate from "../LoginPage/Navigate";
import kakaoSignUp from "../../assets/Login/kakaoSignUp.png";
import line2 from "../../assets/Login/line2.png";
import message from "../../assets/Login/message.png";
import PasswordReInput from "./PasswordReInput";
import { useEffect, useState } from "react";

const SignUpSection = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      id.length > 0 &&
      password.length > 0 &&
      rePassword.length > 0 &&
      password === rePassword
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [id, password, rePassword]);

  return (
    <div>
      <img src={message} className="w-[142px] absolute ml-[120px] mt-[-40px]" />
      <img src={kakaoSignUp} className="w-[386px] cursor-pointer" />
      <img src={line2} className="w-[386px] mt-[40px] mb-[20px]" />
      <IdInput id={id} setId={setId} />
      <PasswordInput password={password} setPassword={setPassword} />
      <PasswordReInput rePassword={rePassword} setRePassword={setRePassword} />
      <Button text="가입하기" isValid={isValid} />
      <Navigate
        message=" 이미 계정이 있으신가요?"
        route="로그인"
        url="/login"
      />
    </div>
  );
};

export default SignUpSection;
