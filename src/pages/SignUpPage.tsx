import PlainNavBar from "../components/_common/PlainNavBar";
import MainCopy from "../components/LoginPage/MainCopy";
import SignUpSection from "../components/SignUpPage/SignUpSection";
import Decoration from "../components/LoginPage/Decoration";
import Template from "../components/LoginPage/Template";

const SignUpPage = () => {
  return (
    <>
      <PlainNavBar />
      <Template>
        <MainCopy />
        <SignUpSection />
      </Template>
      <Decoration />
    </>
  );
};

export default SignUpPage;
