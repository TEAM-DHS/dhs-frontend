import { ReactNode } from "react";

interface TemplateProps {
  // 다른 컴포넌트들을 props로 받아올 수 있음
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div
      className="mt-[100px] ml-[8%] mr-[12%] flex justify-between items-start
mobile:flex mobile:flex-col mobile:items-center mobile:ml-auto mobile:mr-auto
"
    >
      {children}
    </div>
  );
};

export default Template;
