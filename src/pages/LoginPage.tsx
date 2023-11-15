import PlainNavBar from "../components/_common/PlainNavBar";
import MainCopy from "../components/LoginPage/MainCopy";
import LoginSection from "../components/LoginPage/LoginSection";
import Decoration from "../components/LoginPage/Decoration";
import Template from "../components/LoginPage/Template";

const LoginPage = () => {
  return (
    <>
      <PlainNavBar />
      <Template>
        <MainCopy />
        <LoginSection />
      </Template>
      <Decoration />
    </>
  );
};

export default LoginPage;
