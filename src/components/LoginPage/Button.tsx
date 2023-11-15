interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="w-[386px] h-[68px] bg-mainBlue color-white text-white rounded-[12px] cursor-pointer mt-[24px] text-smTitle">
      {text}
    </button>
  );
};

export default Button;
