import axios from "axios";

const refresh = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

// 요청 인터셉터
refresh.interceptors.request.use(
  config => {
    const token = localStorage.getItem("authtoken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
refresh.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // 응답이 실패한 경우
    const originalRequest = error.config;

    // 403 에러일 때만 토큰을 갱신하도록 처리
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // authtoken을 헤더에 담아 '/auth/refresh-token'로 POST 요청 보냄
        const response = await axios.post(
          "https://api.daehaengsa.kro.kr/auth/refresh-token",
          null,
          {
            headers: {
              authtoken: localStorage.getItem("authtoken"),
            },
          },
        );

        // 토큰 갱신에 성공한 경우
        const newToken = response.data.accessToken;
        localStorage.setItem("authtoken", newToken);

        // 새로운 토큰을 사용하여 이전 요청을 다시 시도
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return refresh(originalRequest);
      } catch (refreshError) {
        // 토큰 재발급에 실패한 경우 로그아웃 또는 다른 처리 수행
        // 예: 로그아웃, 에러 메시지 표시 등
        logout();
        redirectToLogin();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

function logout() {
  // 로그아웃 로직을 수행합니다.
}

function redirectToLogin() {
  // 로그인 페이지로 리다이렉션하는 로직을 수행합니다.
}

export default refresh;
