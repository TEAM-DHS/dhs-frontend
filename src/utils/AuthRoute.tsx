import { ReactElement, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

type Props = {
  children?: ReactElement;
  login: boolean; // true : 로그인해야 접근 가능, false : 비로그인해야 접근 가능
};
export default function AuthRoute({ login }: Props): React.ReactElement | null {
  const navigate = useNavigate();
  // const isLogin = !!localStorage.getItem("authtoken");
  const isLogin = true;
  useEffect(() => {
    if (login && !isLogin) {
      alert("로그인 후 사용할 수 있습니다.");
    }
    if (!login && isLogin) {
      navigate(-1);
    }
  }, [login, isLogin]);
  if (login) {
    return !isLogin ? <Navigate to="/login" /> : <Outlet />;
  } else {
    return !isLogin ? <Outlet /> : null;
  }
}
