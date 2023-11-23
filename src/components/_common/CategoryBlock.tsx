import useCategoryText from "../../utils/hooks/useCategoryText";
type Props = {
  text: string;
  useHook?: boolean;
  clicked?: boolean;
  onClick?: (item: any) => void;
};
const CategoryBlock = ({ text, useHook, clicked, onClick }: Props) => {
  const altText = useCategoryText(text);
  return (
    <div
      className={`px-[20px] py-[5px] flex-shrink-0 border-[1px] border-${
        clicked ? "mainBlue" : "lightBlue"
      } ${clicked ? "bg-lightBlue" : "bg-whiteBlue"} rounded-[5px]${
        onClick ? " cursor-pointer" : ""
      }`}
      onClick={onClick ? onClick : () => null}
    >
      <div
        className={`font-regular text-sm ${
          clicked ? "text-mainBlue" : "text-slateBlack"
        }${onClick ? "" : " cursor-default"}`}
      >
        {useHook ? altText : text}
      </div>
    </div>
  );
};

export default CategoryBlock;
