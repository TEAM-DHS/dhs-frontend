import { useNavigate } from "react-router-dom";

const Navigate: React.FC<NavigateProps> = ({ message, route, url }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center mt-[60px]">
      <p className="font-regular text-sm text-darkGray mr-1">{message}</p>
      <a
        className="text-sm text-vibrantBlue cursor-pointer"
        style={{ textDecoration: "underline" }}
        onClick={() => navigate(url)}
      >
        {route}
      </a>
    </div>
  );
};

export default Navigate;
