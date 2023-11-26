const CloseButton: React.FC<CloseButtonProps> = ({ setIsClose }) => {
  return (
    <button
      className="h-[44px] p-[20px] flex items-center rounded-[12px] bg-warningRed text-white font-bold mt-[25px] ml-auto"
      onClick={() => setIsClose(true)}
    >
      마감하기
    </button>
  );
};

export default CloseButton;
