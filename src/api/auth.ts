import client from "./client";

interface InfoType {
  username: string;
  password: string;
}

interface KaKaoOAuthType {
  redirectUri: string;
  code: string;
}

// post signup
export const postSignup = async (userInfo: InfoType) => {
  try {
    const res = await client.post("/auth/signup", userInfo);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// post login
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

// post logout
export const postLogout = async () => {
  try {
    const res = await client.post("/auth/logout");
    localStorage.removeItem("authtoken");
    return res.data;
  } catch (err) {
    throw err;
  }
};

// oauth kakao
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

// post refresh token
