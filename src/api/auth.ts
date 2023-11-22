import client from "./client";

interface InfoType {
  username: string;
  password: string;
}

interface KaKaoOAuthType {
  redirectUri: string;
  code: string;
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
    const accessToken = `${res.data.grantType} ${res.data.accessToken}`;
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

// 카카오 회원가입
export const postKakaoSignUp = async (codeInfo: KaKaoOAuthType) => {
  try {
    const res = await client.post("/oauth/kakao", codeInfo);
    const accessToken = `${res.data.grantType} ${res.data.accessToken}`;
    localStorage.setItem("authtoken", accessToken);
    return res.data;
  } catch (err) {
    throw err;
  }
};
