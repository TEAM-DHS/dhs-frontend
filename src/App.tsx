import { Routes, Route } from "react-router-dom";
import AuthRoute from "./utils/AuthRoute";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPages";
import RegisterListPage from "./pages/RegisterListPage";
import CreatedPage from "./pages/CreatedPage";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      {/* 로그인 상태일 때만 접근 가능 */}
      <Route element={<AuthRoute login={true} />}>
        <Route path="/detail/:id/register" element={<RegisterPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/register/:programId" element={<RegisterListPage />} />
        <Route path="/created" element={<CreatedPage />} />
      </Route>
    </Routes>
  );
}

export default App;
