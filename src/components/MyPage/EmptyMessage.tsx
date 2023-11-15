interface EmptyMessageProps {
  message: string;
}

const EmptyMessage: React.FC<EmptyMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center mt-[20%]">
      <h3 className="text-smTitle">{message}</h3>
    </div>
  );
};

export default EmptyMessage;
