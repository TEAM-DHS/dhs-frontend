const EmptyMessage = ({ message }: EmptyMessageProps) => {
  return (
    <div className="flex justify-center mt-[20%]">
      <h3 className="text-smTitle">{message}</h3>
    </div>
  );
};

export default EmptyMessage;
