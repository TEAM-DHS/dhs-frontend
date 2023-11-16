import PlainNavBar from "../components/_common/PlainNavBar";
import InfoSection from "../components/RegisterPage/InfoSection";
import FormSection from "../components/RegisterPage/FormSection";

const RegisterPage = () => {
  return (
    <>
      <PlainNavBar isToMy={true} />
      <InfoSection />
      <FormSection />
    </>
  );
};

export default RegisterPage;
