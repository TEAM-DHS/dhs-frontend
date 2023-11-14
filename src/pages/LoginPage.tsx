import React from "react";
import PlainNavBar from "../components/_common/PlainNavBar";
import pattern from "../assets/Login/pattern.png";
import kakaoLogin from "../assets/Login/kakaoLogin.png";
import line from "../assets/Login/line.png";
import TextInput from "../components/LoginPage/IdInput";
import PasswordInput from "../components/LoginPage/PasswordInput";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PlainNavBar />
      <div
        className="mt-[100px] ml-[8%] mr-[12%] flex justify-between items-start
      mobile:flex mobile:flex-col mobile:items-center mobile:ml-auto mobile:mr-auto
      "
      >
        <div className="block mobile:hidden">
          <p className="font-thin text-[20px] mb-4">
            동아리 공연부터 과 행사와 축제까지
          </p>
          <h2 className="text-[28px]">
            대학생들이 주최한 <br />
            다양한 행사들을 한번에 만나보세요!
          </h2>
        </div>
        <div>
          <img src={kakaoLogin} className="w-[386px] cursor-pointer" />
          <img src={line} className="w-[386px] mt-[40px] mb-[20px]" />
          <TextInput />
          <PasswordInput />
          <button className="w-[386px] h-[68px] bg-mainBlue color-white text-white rounded-[12px] cursor-pointer mt-[24px] text-smTitle">
            로그인하기
          </button>
          <div className="flex items-center mt-[60px]">
            <p className="font-regular text-sm text-darkGray mr-1">
              아직 계정이 없으신가요?
            </p>
            <a
              className="text-sm text-vibrantBlue cursor-pointer"
              style={{ textDecoration: "underline" }}
              onClick={() => navigate("/signup")}
            >
              회원가입
            </a>
          </div>
        </div>
      </div>
      <img
        src={pattern}
        className="w-[800px] absolute bottom-0 left-0 "
        style={{ zIndex: -1 }}
      />
    </>
  );
};

export default LoginPage;
