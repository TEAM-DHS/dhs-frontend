import client from "./client";

// 회원가입
export const postSignup = async userInfo => {
  try {
    const res = await client.post("/auth/signup", userInfo);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// 로그인
export const postLogin = async userInfo => {
  try {
    const res = await client.post("/auth/login", userInfo);
    const accessToken = res.data.accessToken;
    localStorage.setItem("authtoken", accessToken);
    return res.data;
  } catch (err) {
    throw err;
  }
};
