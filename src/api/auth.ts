import client from "./client";

interface InfoType {
  username: string;
  password: string;
}

// 회원가입
export const postSignup = async (userInfo: InfoType) => {
  try {
    const res = await client.post("/auth/signup", userInfo);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// 로그인
export const postLogin = async (userInfo: InfoType) => {
  try {
    const res = await client.post("/auth/login", userInfo);
    const accessToken = res.data.accessToken;
    localStorage.setItem("authtoken", accessToken);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// 로그아웃
export const postLogout = async () => {
  try {
    const res = await client.post("/auth/logout");
    localStorage.deleteItem("authtoken");
    return res.data;
  } catch (err) {
    throw err;
  }
};
