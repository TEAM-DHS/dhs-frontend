interface ButtonProps {
  text: string;
  isValid?: boolean;
  clickFn?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, isValid, clickFn }) => {
  return (
    <button
      className={`w-[386px] h-[68px] ${
        isValid
          ? "bg-mainBlue cursor-pointer"
          : "bg-lightBlue cursor-not-allowed"
      } color-white text-white rounded-[12px] mt-[24px] text-smTitle`}
      onClick={clickFn}
    >
      {text}
    </button>
  );
};

export default Button;
