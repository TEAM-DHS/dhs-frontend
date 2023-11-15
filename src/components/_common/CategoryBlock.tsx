type Props = {
  text: string;
  clicked?: boolean;
  onClick?: (item: any) => void;
};
const CategoryBlock = ({ text, clicked, onClick }: Props) => {
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
        {text}
      </div>
    </div>
  );
};

export default CategoryBlock;
