interface QuestionProps {
  title: string;
}

const Question: React.FC<QuestionProps> = ({ title }) => {
  return (
    <div className="text-2xl leading-7 font-regular mt-[50px]">
      <span>{title}</span>
      <span className="font-bold text-blue-700 ml-1.5">*</span>
    </div>
  );
};

export default Question;
