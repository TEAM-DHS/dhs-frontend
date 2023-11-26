const Button = ({ text, isValid, clickFn }: ButtonProps) => {
  return (
    <button
      className={`w-[386px] h-[68px] ${
        isValid
          ? "bg-mainBlue cursor-pointer"
          : "bg-lightBlue cursor-not-allowed"
      } color-white text-white rounded-[12px] mt-[24px] text-smTitle`}
      disabled={!isValid}
      onClick={clickFn}
    >
      {text}
    </button>
  );
};

export default Button;
