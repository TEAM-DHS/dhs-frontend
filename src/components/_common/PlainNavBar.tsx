import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const PlainNavBar = () => {
  const nav = useNavigate();

  return (
    <Logo
      width="150"
      className="flex-shrink-0 cursor-pointer ml-[50px] mt-[10px]"
      onClick={() => nav("/")}
    />
  );
};

export default PlainNavBar;
