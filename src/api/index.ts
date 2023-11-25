import axios from "axios";
import { postRefreshToken } from "./auth";

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "/",
  withCredentials: true,
});

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await postRefreshToken();
        console.log("응답", res);
        const newAccessToken = res.data.accessToken;
        const grantType = res.data.grantType;

        if (newAccessToken) {
          localStorage.setItem("authtoken", `${grantType} ${newAccessToken}`); // 새 토큰 저장
          originalRequest.headers[
            "Authorization"
          ] = `${grantType} ${newAccessToken}`; // 새 요청의 헤더
          updateAuthHeader(`${grantType} ${newAccessToken}`); // 기존 axios 객체의 헤더
        }

        return axios(originalRequest);
      } catch (err) {
        console.log("토큰 재발급 실패 ", err);
        // localStorage.removeItem("authtoken"); // 토큰 삭제
        // window.location.href = `/login`;
      }
    }
    return Promise.reject(error);
  },
);

// 헤더 비우는 훅
export const initAuthHeader = () => {
  // eslint-disable-next-line dot-notation
  apiClient.defaults.headers.common["Authorization"] = "";
};

// 바뀐 accessToken 적용하는 hook
export const updateAuthHeader = (newAccessToken = "") => {
  // eslint-disable-next-line dot-notation
  if (!newAccessToken) {
    initAuthHeader();
    return;
  }
  apiClient.defaults.headers.common.Authorization = `${newAccessToken}`;
};

export default apiClient;

const accessToken = localStorage.getItem("authtoken");
updateAuthHeader(accessToken || "");
