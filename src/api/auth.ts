import apiClient from ".";

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
    const res = await apiClient.post("/auth/signup", userInfo);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// post login
export const postLogin = async (userInfo: InfoType) => {
  try {
    const res = await apiClient.post("/auth/login", userInfo);
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
    const res = await apiClient.post("/auth/logout");
    localStorage.removeItem("authtoken");
    return res.data;
  } catch (err) {
    throw err;
  }
};

// oauth kakao
export const postKakaoSignUp = async (codeInfo: KaKaoOAuthType) => {
  try {
    const res = await apiClient.post("/oauth/kakao", codeInfo);
    const accessToken = `${res.data.grantType} ${res.data.accessToken}`;
    localStorage.setItem("authtoken", accessToken);
    return res.data;
  } catch (err) {
    throw err;
  }
};

// post refresh token
export const postRefreshToken = async () => {
  try {
    const url = "/auth/refresh-token";
    const authToken = localStorage.getItem("authtoken");

    const headers = authToken ? { Authorization: authToken } : {};
    const response = await apiClient.post(url, null, { headers });

    return response;
  } catch (error) {
    console.log("재발급오류", error);
    throw error;
  }
};
