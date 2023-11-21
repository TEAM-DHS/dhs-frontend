import kakaoLogin from "../../assets/Login/kakaoLogin.png";
import line from "../../assets/Login/line.png";
import IdInput from "./IdInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import Navigate from "./Navigate";
import { useState } from "react";
import { postLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const LoginSection = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isValidId, setIsValidId] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const navigate = useNavigate();

  const postLoginInfo = async () => {
    try {
      const res = await postLogin({ username: id, password: password });
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <img src={kakaoLogin} className="w-[386px] cursor-pointer" />
      <img src={line} className="w-[386px] mt-[40px] mb-[20px]" />
      <IdInput id={id} setId={setId} setIsValidId={setIsValidId} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        setIsValidPassword={setIsValidPassword}
      />
      <Button
        text="로그인하기"
        isValid={isValidId && isValidPassword}
        clickFn={postLoginInfo}
      />
      <Navigate
        message="아직 계정이 없으신가요?"
        route="회원가입"
        url="/signup"
      />
    </div>
  );
};

export default LoginSection;
