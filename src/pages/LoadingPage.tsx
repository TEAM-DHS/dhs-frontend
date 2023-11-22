import { postKakaoSignUp } from "../api/auth";
import { useEffect } from "react";
import loading from "../assets/Login/loading.gif";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();

  const fetchData = async () => {
    const codeParam = new URL(document.location.toString()).searchParams.get(
      "code",
    );
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;

    if (codeParam && redirectUri) {
      const req = {
        redirectUri: redirectUri,
        code: codeParam,
      };
      try {
        const res = await postKakaoSignUp(req);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.error("No code parameter found in the URL.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col mt-[18%]">
      <img src={loading} />
      <h2 className="text-smTitle">로그인 중입니다...</h2>
    </div>
  );
};

export default LoadingPage;
